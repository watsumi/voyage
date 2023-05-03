import * as React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import kebabCase from "lodash/kebabCase"

const Article = ({ post, title, tags, thumbnail }) => {
  return (
    <li className="article-list" key={post.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <div className="summary-box">
          <Image
            className="image-wrapper"
            fluid={thumbnail}
            alt={title}
          />
          <div className="description-box">
            <div className="tags-article">
              {tags && tags.length > 0 && tags.map(tag => {
                return (
                  <Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
                    <span itemProp="tag">#{tag}</span>
                  </Link>
                )
              })}
            </div>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Article