import styled from "@emotion/styled";
import { FunctionComponent, ReactNode } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

interface TemplateProps {
    title: string
    description: string
    url: string
    image: string
    children: ReactNode
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Template: FunctionComponent<TemplateProps> = ({
    title,
    description,
    url,
    image,
    children
}) => (
    <Container>
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={title} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@Chobby" />
            <meta name="twitter:creator" content="@Chobby" />

            <meta name="google-site-verification" content="HiS5KlbzJTMfgD_vA4bDkR5v8Q6kmbSNfCFf73AEcw4" />
            <meta name="naver-site-verification" content="a837109735dbc3d1ad76b993889b8b429489045d" />

            <html lang="ko" />
        </Helmet>
        <GlobalStyle />
        {children}
        <Footer />
    </Container>
)

export default Template