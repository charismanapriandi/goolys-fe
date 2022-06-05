import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/database";
import httpProxy from 'http-proxy';
import cookie from 'cookie';
import url from 'url';
import jwt from 'jsonwebtoken';

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }
const accessSecret = process.env.JWT_ACCESS_SECRET as string
const maxAge = 60 * 60 * 8;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const rejectMethod = () => {
      res.setHeader('Allow', ['POST'])
      res.status(405).json({message: `Method ${req.method} not allowed`})
    }
    
    if (req.method !== 'POST') throw rejectMethod()
    
    const {email, password} = req.body;

    const user = await db.user.findUnique({
      where: {
        email: email
      }
    })
    
    if (user) {
      if (user.password === password) {
        const payload = {
          email: user.email,
          id: user.id
        }
        const token = jwt.sign(payload, accessSecret, {
          expiresIn: '5m'
        })
        const serialized = cookie.serialize('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: maxAge,
          sameSite: 'strict',
          path: '/'
        })
        res.setHeader('Set-Cookie', serialized);
        res.status(200).json({message: 'Success!'});
      } 
    } else throw res.status(401).json({message: 'Invalid credentials!'})
  } catch (err) {
    return res.status(500).json(err);
  }
}