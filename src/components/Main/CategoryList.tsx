import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

type CategoryItemProps = {
    active: boolean;
}

type GatsbyLinkProps = {
    children: ReactNode;
    className?: string;
    to: string;
} & CategoryItemProps

export interface CategoryListProps {
    selectedCategory: string;
    categoryList: {
        [key: string]: number
    }
}

const CategoryListWrapper: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;

    @media(max-width: 768px) {
        width: 100%;
        margin-top: 50px;
        padding: 0 20px;
    }
`
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem: any = styled(({active, ...props}: GatsbyLinkProps) => (
    <Link {...props} />
))<CategoryItemProps>`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    cursor: pointer;
    font-weight: ${({active}) => (active ? '800' : '400')}
    &:last-of-type {
        margin-right: 0;
    }

    @media(max-width: 768px) {
        font-size: 15px;
    }
`

const CategoryList: FunctionComponent<CategoryListProps> = ({selectedCategory, categoryList}) => {
    return (
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count]) => (
                <CategoryItem
                    to={`/?category=${name}`}
                    active={name === selectedCategory}
                    key={name}
                >
                    #{name}({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList