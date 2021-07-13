import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";

export type PostType = {
    node: {
      id: string;
      frontmatter: {
        title: string;
        summary: string;
        date: string;
        categories: string[];
        thumbnail: {
          publicURL: string;
        };
      };
    };
  };

interface PostListProps {
    posts: PostType[]
}

const PostListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 768px;
    margin: 0 auto;
    padding: 50px 0 100px;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 50px 20px;
    }
`

const PostList: FunctionComponent<PostListProps> = ({posts}) => {
    return (
        <PostListWrapper>
            {posts.map(
                ({
                    node: {
                        id,
                        frontmatter: {
                            thumbnail: { publicURL },
                            ...rest
                        }
                    }
                }: PostType) => (
                    <PostItem
                        {...rest}
                        thumbnail={publicURL}
                        link="https://github.com/kwb020312/React-GatsBy_Blog"
                        key={id}
                    />
                )
            )}
        </PostListWrapper>
    )
}

export default PostList