import { FunctionComponent, useState } from "react";
import axios from 'axios';
import { API_ROUTES, instance } from "@/config/axios";
import { useRouter } from "next/router";
import router from 'next/router'
import PrivatePageBlocker from "@/organisms/PrivatePageBlocker";

const withAuth = (Components: FunctionComponent<any>) => {
  const AuthComponents = (props: any) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [invalidMessage, setInvalidMessage] = useState<string>();

    async function validate (){
      try {
        const res = await instance({
          method: 'GET',
          url: API_ROUTES.AUTH.VALIDATE
        })
        setIsValid(true)
      } catch (err: any) {
        setIsValid(false),
        setInvalidMessage(err?.response?.data?.message);
      }
    }

    validate()

    if (!isValid) {
      return <PrivatePageBlocker message={invalidMessage} />
    } else {
      return <Components {...props} />
    }
  }

  return AuthComponents;
}

export default withAuth;