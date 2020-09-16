import { graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import productCSS from "../styles/products.module.css"

export default function Template({ data }) {
  const product = data.wcProducts
  return (
    <Layout>
      <Link to="/woocommerce">Go Back</Link>
      <hr />
      <Img
        fluid={product.images[0].localFile.childImageSharp.fluid}
        alt={product.images[0].alt}
        style={{ margin: "1rem", maxHeight: "calc(40vh - 4rem)" }}
        imgStyle={{ objectFit: "contain" }}
      />
      <p
        className={productCSS.productPrice}
        dangerouslySetInnerHTML={{ __html: product.price_html }}
      ></p>
      <h2>
        <strong>{product.name}</strong>
      </h2>
      <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
    </Layout>
  )
}

export const ProductQuery = graphql`
  query ProductByPath($slug: String!) {
    wcProducts(slug: { eq: $slug }) {
      id
      name
      price_html
      description
      slug
      images {
        alt
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
