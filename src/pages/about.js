import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="How to buy NFTs"
        keywords={[`NFT`, `how to`, `buy nft`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="dynamic-styles">How to buy an NFT</h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3 id="dynamic-styles">Step 1: Set up your digital wallet</h3>
          <div>
            In order to purchase, send or receive any NFTs or Cryptocurrencies,
            you'll need to set up a crypto wallet.
          </div>
          <p>
            To download Metamask, head over to the official{" "}
            <a href="https://metamask.io/">Metamask</a> website for
            instructions.
          </p>

          <div>
            To download coinbase wallet, head over to{" "}
            <a href="https://wallet.coinbase.com/">Coinbase Wallet</a> for
            further instructions on how to set up a wallet.
          </div>
          <h3 id="dynamic-styles">Step 2: Add funds to your wallet</h3>
          <div>
            Now that you have set up your wallet, it's time to add some Eth into
            your wallet. You can use any exchange such as Coinbase to purchase
            Eth.
          </div>
          <h3 id="dynamic-styles">
            Step 3: Navigate to your preferred marketplace
          </h3>
          <h3 id="dynamic-styles">Step 4: Browse, Bid, Buy</h3>
          <p>
            Now that you've set up your wallet, it's time to head over to an NFT
            marketplace and buy your first NFT!
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
