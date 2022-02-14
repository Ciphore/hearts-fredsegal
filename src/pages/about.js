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
          <p>
            In order to purchase, send or receive any NFTs or Cryptocurrencies,
            you'll need to set up a digital cryptocurrency wallet.
          </p>
          <p>
            To download Metamask, head over to the official{" "}
            <a href="https://metamask.io/">Metamask</a> website for
            instructions.
          </p>

          <p>
            To download Coinbase Wallet, head over to{" "}
            <a href="https://wallet.coinbase.com/">Coinbase Wallet</a> for
            further instructions on how to set up a Coinbase digital wallet.
          </p>
          <h3 id="dynamic-styles">Step 2: Add funds to your wallet</h3>
          <div>
            Now that you've set up your wallet, it's time to add some Ethereum into
            it. You can use any exchange such as Coinbase or Binance to purchase
            Eth. 
          </div>
          <h3 id="dynamic-styles">
            Step 3: Navigate to your preferred NFT marketplace
          </h3>
          <div>
            There are many reputable NFT marketplaces out there.{" "}<a href="https://opensea.io/">OpenSea</a> and{" "}<a href="https://looksrare.org">Looksrare</a>
            are the two most popular marketplaces for all of your non-fungible cravings.
            
          </div>
          <h3 id="dynamic-styles">Step 4: Connect your Wallet, Browse & Buy</h3>
          <p>
            Once you're on the marketplace of your choosing, you'll see a connect 
            wallet prompt to log in. Simply connect your wallet by allowing your 
            digital wallet to connect to the marketplace, and shop away! Every sale
            will prompt a transaction request to your wallet in order to make a public record of your ownership on the blockchain.
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
