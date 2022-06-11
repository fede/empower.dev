import * as React from "react"
import mixpanel from "mixpanel-browser"

const mixpanelConfig =
  process.env.NODE_ENV === "development"
    ? {
        debug: true,
        ignore_dnt: true,
      }
    : {}

function useMixpanel() {
  mixpanel.init(process.env.MIXPANEL_API_TOKEN as string, mixpanelConfig)
  return mixpanel
}

export default useMixpanel
