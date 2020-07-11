import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="404 Page">
    <SEO title="404: Not found Go back" />
    <Link className="btn btn-primary text-uppercase" to={'/'}>Go home</Link>
  </Layout>
)

export default NotFoundPage
