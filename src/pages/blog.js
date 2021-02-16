import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Blog = () => {


  const data = useStaticQuery(
    graphql `
    query{
      allContentfulBlogPost(sort: {fields: publicationDate, order: DESC}) {
        edges {
          node {
            id
            title
            slug
            publicationDate(formatString: "Do MMMM,YYYY")
            image {
              fluid(maxWidth: 750) {
                ...GatsbyContentfulFluid
              }
            }
            content {
              raw
            }
          }
        }
      }
    }
    `
  )
    console.log(data);

  return(
    <Layout>
    <SEO title="Blog" />
    <p><Link  to='/' >Go Back to Home Page</Link> </p>
    <ul className='posts' >
      {
        data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className='post' key={edge.node.id} >
              <h2>
                <Link to={`/blog/${edge.node.slug}/`} >{edge.node.title}</Link>
              </h2>
              <div className='meta' >
                <span>Posted on {edge.node.publicationDate}</span>
              </div>
              {
                edge.node.image && (
                  <Img 
                    className="featured"
                    fluid = {edge.node.image.fluid}
                    alt={edge.node.title}
                  />
                )
              }
              {/* <p className='excerpt' >
                {
                  documentToReactComponents(edge.node.content.raw)
                }
              </p> */}
            </li>
          )
        })
      }
    </ul>
  </Layout>
  )

 

}
export default Blog
