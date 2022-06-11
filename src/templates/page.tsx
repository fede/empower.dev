import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../global.css"
import { Helmet } from "react-helmet"
import useMixpanel from "../lib/useMixpanel"

type PageContext = {
  title: string
  body: string
  parent: Parent
}

type Parent = {
  slug: string
  title: string
}

type PageProps = {
  pageContext: PageContext
}

const Page = ({ pageContext }: PageProps) => {
  const { title, body, parent } = pageContext
  const mixpanel = useMixpanel()
  mixpanel.track(`View page ${title}`)

  const parentOpts = title === "Start" ? null : parent
  const pageTitle = title === "Start" ? null : title

  return (
    <main>
      <Helmet>
        <title>{title} - Empower.Dev</title>
      </Helmet>
      <Header title={pageTitle} parent={parentOpts} />
      <div
        className="wrapper"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
      <Footer />
    </main>
  )
}

export default Page
