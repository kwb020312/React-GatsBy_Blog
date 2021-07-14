import { FunctionComponent } from "react";

interface PostTemplateProps {}

const PostTemplate: FunctionComponent<PostTemplateProps> = (props) => {
    console.log(props)

    return <div>Post Template</div>
}

export default PostTemplate