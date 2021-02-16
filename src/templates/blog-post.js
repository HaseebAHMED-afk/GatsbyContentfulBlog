import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publicationDate(formatString: "Do MMMM, YYYY")
      image {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`

const BlogPost = props => {


      

  return ( 
      <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
          <Link to='/blog/' >Visit the blog page</Link>
          <div className='content' >
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <span className="meta" >
                Posted on {props.data.contentfulBlogPost.publicationDate}
            </span>
            {
                props.data.contentfulBlogPost.image && (
                    <Img 
                        className="featured"
                        fluid={props.data.contentfulBlogPost.image.fluid}
                        alt={props.data.contentfulBlogPost.title}
                    />
                )
            }
              {
                  documentToPlainTextString(JSON.parse(props.data.contentfulBlogPost.body.raw))
              }
            <p>
            </p>
          </div>
      </Layout>
  )
}

export default BlogPost
