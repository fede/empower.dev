import * as React from "react"
import Header from "../components/Header"
import "../global.css"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import useMixpanel from "../lib/useMixpanel"

type PageProps = {
  data: any
}

const ChangeList = styled.ul`
  padding-left: 1.3rem;

  li {
    line-height: 2rem;
  }

  li a {
    text-decoration: none;
  }
`

const Changelog = ({ data }: PageProps) => {
  const mixpanel = useMixpanel()
  if (mixpanel) {
    mixpanel.track("View page Changelog")
  }

  return (
    <main>
      <Helmet>
        <title>Changelog - Empower.Dev</title>
      </Helmet>
      <Header title="Changelog" parent={{ slug: "/", title: "Start" }} />
      <div className="wrapper">
        <ChangeList>
          {data.allContentfulPage.edges.map((page) => (
            <li key={page.node.slug}>
              <Link to={`/${page.node.slug}`}>
                <b>{page.node.title}</b> <i>updated {page.node.updatedAt}</i>
              </Link>
            </li>
          ))}
        </ChangeList>
      </div>
    </main>
  )
}

export const query = graphql`
  query changelog($limit: Int) {
    allContentfulPage(limit: $limit, sort: { order: DESC, fields: updatedAt }) {
      edges {
        node {
          title
          slug
          updatedAt(fromNow: true)
        }
      }
    }
  }
`

export default Changelog
