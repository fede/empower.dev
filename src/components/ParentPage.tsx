import * as React from "react"
import styled from "styled-components"

const LinkBack = styled.div`
  line-height: 2rem;
  a {
    text-decoration: none;
  }
`

type ParentPageProps = {
  title: string
  href: string
}

const ParentPage = ({ title, href }: ParentPageProps) => {
  return (
    <LinkBack className="wrapper">
      <a href={href}>&#8592; {title}</a>
    </LinkBack>
  )
}

export default ParentPage
