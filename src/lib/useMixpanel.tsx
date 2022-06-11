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
  const [isMixpanelReady, setIsMixpanelReady] = React.useState(false)

  React.useEffect(() => {
    mixpanel.init(process.env.MIXPANEL_API_TOKEN as string, {
      ...mixpanelConfig,
      loaded: () => {
        setIsMixpanelReady(true)
      },
    })
  })

  return isMixpanelReady ? mixpanel : isMixpanelReady
}

export default useMixpanel
