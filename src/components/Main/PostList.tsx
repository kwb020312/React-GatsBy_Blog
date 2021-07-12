import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import PostItem from "./PostItem";

const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: ['Web', 'Frontend', 'Testing'],
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
    thumbnail: 'https://camo.githubusercontent.com/48d89336ff2e461d7916c54c387eae8be2a723b97c0653f21b319761c7144b2d/68747470733a2f2f706f737466696c65732e707374617469632e6e65742f4d6a41794d4441314d544a664d6a55772f4d4441784e5467354d6a6b304e6a67774f5455342e524a7a53305a4444495150546659526b4675675648624a667a424c574b344b615f707667345431554f3567672e3654414531427542437546465f646772587048716f7872744d37435a743344736e4b31477a714754495563672e504e472e6b77623032303331322f696d6167652e706e673f747970653d77373733',
    link: 'https://github.com/kwb020312/faceclone'
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

const PostList: FunctionComponent = () => {
    return (
        <PostListWrapper>
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
            <PostItem {...POST_ITEM_DATA} />
        </PostListWrapper>
    )
}

export default PostList