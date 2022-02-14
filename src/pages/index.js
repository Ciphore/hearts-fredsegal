import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`the heart project`, `heartnfts`, `fred segal`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <div>
            <h2 className="page-head-title">
              {data.site.siteMetadata.description}
            </h2>
          </div>
          <div>{/* <a href="/" className="bn3">Explore Services</a> */}</div>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>

          <div>
            NFT stands for a non-fungible token, which means that hidden in
            those quirky artworks, there's a unique and non-interchangeable unit
            of data stored on a digital ledger using blockchain technology to
            establish proof of ownership. Essential the same, or similar
            technology used for cryptocurrencies like bitcoin and ether is used
            to guarantee the uniqueness of each NFT and to prove who owns it.
          </div>

          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <h1>How do NFTs work?</h1>
          <span>&nbsp;&nbsp;</span>
          <div>
            The unique identity and ownership of an NFT is verifiable via the
            blockchain ledger. They were first launched on the Ethereum
            blockchain, but other blockchains including FLOW and Bitcoin Cash
            now also support them. Whether the original file is a JPG, MP3, GIF
            or anything else, the NFT that identifies its ownership can be
            bought and sold just like any other type of art and, like with
            physical art, the price is largely set by market demand.
          </div>

          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>

          <h1>where can I buy NFTs?</h1>
          <span>&nbsp;&nbsp;</span>
          <div>
            There are many marketplaces to buy and sell NFTs. Depending on which
            marketplace you choose, you’ll be able to purchase different types
            of art or collectibles. A lot of these websites have secondary
            marketplaces with a variety of NFTs, but each platform operates
            slightly differently. <a href="https://opensea.io">OpenSea</a>
            {""} is a marketplace for NFTs that operates on Ethereum. Users can
            interact with the network to exchange non-fungible tokens for
            cryptocurrency. It hosts a variety of digital collectibles, from
            video game items to digital artwork.
          </div>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <h1>Can anyone make an NFT?</h1>

          <div>
            Creating an NFT is a surprisingly easy process. All you need to do
            is make an account with a marketplace like OpenSea that lets its
            users create NFTs. You don’t need to know how to make an ERC-721
            (NFT) token or have any experience with blockchain for that matter
            {". "}
            <a href="https://superrare.com/">SuperRare</a>
            {""} is a social network for NFTs. Each piece on the platform is
            unique, and users can buy and sell these original pieces on its
            website. The platform operates with Ethereum’s network, so you’ll
            need to fund your account with Eth tokens to make your purchase.
          </div>

          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>

          <h1>Where can I learn more about NFTs?</h1>
          <div>If you'd like to know more about NFTs, check out {""} <a 
          href="https://www.creativebloq.com/features/what-are-nfts">This article</a> {""}.  </div>

          {/* <hr /> */}
        </header>
      )}
      {/* <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */}
      {/* <a href="#" class="page-head-description">BUTTON</a> */}
      {/* <a href="/" className="bn3">Explore Services</a> */}
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
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

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
