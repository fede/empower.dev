import * as React from "react"
import Header from "../components/Header"
import styled from "styled-components"
import useMixpanel from "../lib/useMixpanel"

const PageTitle = styled.h2`
  margin: auto;
  text-align: center;
`

const NotFoundPage = () => {
  const mixpanel = useMixpanel()
  if (mixpanel) {
    mixpanel.track("View error 404")
  }

  return (
    <main>
      <title>Not found</title>
      <Header />
      <PageTitle>Page not found</PageTitle>
    </main>
  )
}

export default NotFoundPage
