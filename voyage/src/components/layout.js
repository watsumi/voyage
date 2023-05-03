import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let mainClassName = ''

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
          <StaticImage
            className="ship-icon"
            src="../images/ship-icon.png"
            width={50}
            height={50}
            quality={95}
            alt="icon"
          />
        </h1>
        <Link className="resume" to="/resume">職務経歴書</Link>
      </>
    )
    mainClassName = 'main-wrapper'
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className={mainClassName}>{children}</main>
    </div>
  )
}

export default Layout
