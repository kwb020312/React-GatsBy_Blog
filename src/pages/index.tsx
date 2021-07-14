import React, {FunctionComponent} from "react"
import styled from "@emotion/styled"
import GlobalStyle from "components/Common/GlobalStyle"
import Introduction from "components/Main/Introduction"
import Footer from "components/Common/Footer"
import CategoryList, { CategoryListProps } from "components/Main/CategoryList"
import PostList, { PostType } from "components/Main/PostList"
import { graphql } from "gatsby"
import { ProfileImageProps } from "components/Main/ProfileImage"
import queryString,{ ParsedQuery } from "query-string"
import { useMemo } from "react"
import Template from "components/Common/Template"

interface IndexPageProps {
    location: {
        search: string;
    }
    data: {
        allMarkdownRemark: {
            edges: PostType[]
        }
        file: {
            childImageSharp: {
                fluid: ProfileImageProps['profileImage'];
            }
        }
    }
}

const IndexPage:FunctionComponent<IndexPageProps> = ({
    location:{search},
    data: {
      allMarkdownRemark: { edges },
      file: {
          childImageSharp: {fluid}
      }
    },
  }) => {
      const parsed : ParsedQuery<string> = queryString.parse(search)
      const selectedCategory: string = typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category
      const categoryList = useMemo(() => edges.reduce(
          (
              list: CategoryListProps['categoryList'],
              {
                  node: {
                      frontmatter: { categories }
                  }
              } : PostType
          ) => {
              categories.forEach(category => {
                  if(list[category] === undefined) list[category] = 1
                  else list[category]++
              })
              list['All']++
              return list
          },
          {All:0}
      ),[])
    return (
        <Template>
            <Introduction profileImage={fluid} />
            <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
            <PostList selectedCategory={selectedCategory} posts={edges} />
        </Template>
    )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;