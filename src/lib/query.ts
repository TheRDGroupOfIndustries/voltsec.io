import { groq } from 'next-sanity'

/**
 * GROQ query to fetch multiple blogs.
 * @returns {string} - GROQ query string.
 */
export const blogs = groq`
*[_type == "blog" ]{
    blogName,
    createdAt,
    "category":category->{title,slug},
    "author":author-> {
        authorName, 
        "image":authorImage.asset->url
    },
    "image":blogImage.asset->url,
    "slug":blogSlug.current,
    description,
}
`

/**
 * GROQ query to fetch a single blog by slug.
 * @param {string} slug - Slug of the blog.
 * @returns {string} - GROQ query string.
 */
export const blog = groq`
*[_type == "blog" && blogSlug.current == $slug][0]{
    blogName,
    createdAt,
    "category":category->{title,slug},
    "author":author->{authorName, 
    "image":authorImage.asset->url
    },
    "image":blogImage.asset->url,
    "slug":blogSlug.current,
    description,
}
`

export const teamPortfolio = groq`
*[_type == "teamPortfolio" ]{
    employeeName,
    createdAt,
    category,
    "image":employeeImage.asset->url,
    "slug":employeeSlug.current,
    description,
}
`
export const employee = groq`
*[_type == "teamPortfolio" && employeeSlug.current == $slug][0]{
    employeeName,
    createdAt,
    department,
    "image":employeeImage.asset->url,
    "slug":employeeSlug.current,
    description,
}
`
