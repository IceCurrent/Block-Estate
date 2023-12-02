// import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react"
import Routes from "./Routes"

import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import {
  ConnectButton,
  ConnectDialog,
  Connect2ICProvider,
} from "@connect2ic/react"
import "@connect2ic/core/style.css"

const client = createClient({
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})

function App() {
  return (
    <Connect2ICProvider client={client}>
      <Routes />
    </Connect2ICProvider>
  )
}

export default App
// export default () => (
//   <Connect2ICProvider client={client}>
//     <App />
//   </Connect2ICProvider>
// )
