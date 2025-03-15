import Giscus from "@giscus/react"

const Comments = () => {
    return (
        <Giscus
            id="comments"
            repo="kamasheto/sakr.me-discussions"
            repoId="R_kgDOOJEfWQ"
            category="Announcements"
            categoryId="DIC_kwDOOJEfWc4CoEO1"
            mapping="og:title"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
            />
    )
};

export default Comments;