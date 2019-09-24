import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
export default () => (
    <Layout>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p css={css`
            text-align: center;
            `}>
            <a href="mailto:itmanselmo@gmail.com">itmanselmo@gmail.com</a>
        </p>
    </Layout>
) 