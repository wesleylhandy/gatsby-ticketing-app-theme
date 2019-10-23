import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"

const Auth = () => (
  <Layout>
    <Router>
      <Login path="/auth/login"/>
    </Router>
  </Layout>
)

export default Auth