import styled from "@emotion/styled";
import { FunctionComponent, ReactNode } from "react";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

interface TemplateProps {
    children: ReactNode
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Template: FunctionComponent<TemplateProps> = ({children}) => (
    <Container>
        <GlobalStyle />
        {children}
        <Footer />
    </Container>
)

export default Template