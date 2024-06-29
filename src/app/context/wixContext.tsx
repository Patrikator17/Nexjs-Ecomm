"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from 'js-cookie';
import { ReactNode, createContext } from "react";

const refreshToken = JSON.parse(Cookies.get('refreshToken') || "{}") 

const myWixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.YOUR_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: {
            value: "",
            expiresAt: 0
        }
      }
    })
  })

  export type WixClient= typeof myWixClient

  export const WixClientContext = createContext<WixClient>(myWixClient)

  export const WixClientContextProvider = ({children} : {children : ReactNode}) => {
    return (
      <WixClientContext.Provider value={myWixClient}>
        {children}
      </WixClientContext.Provider>
    )
  }