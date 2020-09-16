import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import productCSS from "../styles/products.module.css"

const WooCommerce = ({ data }) => (
  <Layout>
    <h2>WooCommerce Products</h2>
    <div className={productCSS.productList}>
      {data.allWcProducts.edges.map(product => (
        <div className={productCSS.product} key={product.node.id}>
          <Img
            fluid={product.node.images[0].localFile.childImageSharp.fluid}
            alt={product.node.images[0].alt}
            style={{ margin: "1rem", maxHeight: "calc(25vh - 4rem)" }}
            imgStyle={{ objectFit: "contain" }}
          />
          <p >
            <strong>{product.node.name}</strong>
          </p>
          <p
            className={productCSS.productPrice}
            dangerouslySetInnerHTML={{ __html: product.node.price_html }}
          ></p>
          <button className={productCSS.cartButton}>Add to Cart</button>
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query productsQuery {
    allWcProducts {
      edges {
        node {
          id
          name
          description
          price
          sale_price
          price_html
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
    }
  }
`
export default WooCommerce
