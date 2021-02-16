import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there!</h1>
    <p>Welcome to my Gatsby Blog site.</p>
    <p>Click the link below and enjoy the ride.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/">Go to Blog Page</Link> <br />
  </Layout>
)

export default IndexPage
