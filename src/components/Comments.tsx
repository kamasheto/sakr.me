import Giscus from "@giscus/react"

const Comments = () => {
    return (
        <Giscus
            id="comments"
            repo="kamasheto/sakr.me"
            repoId="R_kgDOOJCn4g"
            category="Site Interactions"
            categoryId="DIC_kwDOOJCn4s4CoRkp"
            mapping="pathname"
            reactionsEnabled="1"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
            />
    )
};

export default Comments;