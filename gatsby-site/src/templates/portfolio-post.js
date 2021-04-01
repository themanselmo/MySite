import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default ({ data }) => {
    const post = data.markdownRemark

    let featuredImg = post.frontmatter.featuredImage.childImageSharp.fluid

    return (
        <Layout>
            <div>
                <h1 css={css`
                border-bottom: 1px solid;
                text-align: center;
          `}>{post.frontmatter.title}</h1>
                <Img fluid={featuredImg} alt="an image" />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            featuredImage {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`