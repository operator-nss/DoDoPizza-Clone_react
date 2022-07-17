import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={292}
        height={430}
        viewBox="0 0 292 430"
        backgroundColor="#f3f3f3"
        foregroundColor="#ff6900"
    >
        <circle cx="145" cy="135" r="132" />
        <rect x="8" y="299" rx="5" ry="5" width="282" height="20" />
        <rect x="11" y="334" rx="5" ry="5" width="282" height="20" />
        <rect x="10" y="389" rx="15" ry="15" width="100" height="40" />
        <rect x="170" y="389" rx="15" ry="15" width="110" height="40" />
    </ContentLoader>
)

export default Skeleton
