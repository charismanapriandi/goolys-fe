import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const accessSecret = process.env.JWT_ACCESS_SECRET as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const {cookies} = req

    const verified = await jwt.verify(cookies.token, accessSecret)

    res.status(200).json(verified);
  } catch (err) {
    return res.status(500).json(err);
  }
}