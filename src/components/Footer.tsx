import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  text-align: center;
  line-height: 2rem;
  margin-top: 2rem;

  a {
    text-decoration: none;
    font-size: 0.8rem;
  }
`

const Footer = () => {
  return (
    <FooterContainer className="wrapper">
      <Link to="/changelog">Changelog</Link>
    </FooterContainer>
  )
}

export default Footer
