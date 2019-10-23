import React from "react"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

export const wrapRootElement = ({ element}, options) => {
    return (  
        <IdentityContextProvider url={options.url}>
            {element}
        </IdentityContextProvider>
    )
}