import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import idea from "../images/07.png"
export default () => (
    <Layout>
        <h1>I'd love to talk! Email me at the address below:</h1>
        <p css={css`
            text-align: center;
            `}>
            <a href="mailto:maxedwans@gmail.com">maxedwans@gmail.com</a>
        </p>
        <img src={idea} alt="ideas"/>
    </Layout>
    
) 
