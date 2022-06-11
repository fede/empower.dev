import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ParentPage from "./ParentPage"

const HeaderWrapper = styled.div`
  margin: auto;
  text-align: center;
  font-size: 2rem;
  font-family: "Kdam Thmor Pro", sans-serif;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
  }
`

type HeaderProps = {
  parent?: Parent | null
  title?: string | null
}

type Parent = {
  slug: string
  title: string
}

const Header = ({ title, parent }: HeaderProps) => {
  const pageTitle = title ? <h1 className="wrapper">{title}</h1> : null
  const parentPageLink = parent ? (
    <ParentPage href={parent?.slug} title={parent?.title} />
  ) : null

  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          empower.<i>dev</i>
        </Link>
      </HeaderWrapper>
      {parentPageLink}
      {pageTitle}
    </>
  )
}

export default Header
