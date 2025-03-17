import Giscus from "@giscus/react"

const Comments = () => {
    return (
        <Giscus
            id="comments"
            repo="kamasheto/sakr.me-discussions"
            repoId="R_kgDOOJEfWQ"
            category="Site Comments and Reactions"
            categoryId="DIC_kwDOOJEfWc4CoEO1"
            mapping="og:title"
            reactionsEnabled="1"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
            />
    )
};

export default Comments;