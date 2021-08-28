import { graphql } from "gatsby";
import PostPage from "../components/post-page";

export default PostPage;

export const query = graphql`
  query PostQuery($slug: String!, $tags: [String!]!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      tableOfContents(maxDepth: 2)
      fields {
        title
        slug
        url
        editUrl
        lastUpdatedAt
        lastUpdated
        gitCreatedAt
      }
      frontmatter {
        title
        description
        imageAlt
        tags
        date
        dateModified
        language
        image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      rawBody
      excerpt(truncate: true)
      outboundReferences {
        ... on Mdx {
          body
          frontmatter {
            title
          }
          fields {
            slug
            title
          }
        }
      }
      inboundReferences {
        ... on Mdx {
          body
          frontmatter {
            title
          }
          fields {
            slug
            title
          }
        }
      }
    }
    tagsOutbound: allMdx(filter: { frontmatter: { tags: { in: $tags } } }) {
      nodes {
        frontmatter {
          title
          tags
        }
        fields {
          slug
          title
          lastUpdated
          lastUpdatedAt
          gitCreatedAt
        }
      }
    }
  }
`;