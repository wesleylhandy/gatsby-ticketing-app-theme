import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Callback from "../components/callback"
import AdminLogin from "../components/admin-login"
import CustomerLogin from "../components/customer-login"
import AttendantLogin from "../components/attendant-login"

const Auth = () => (
  <Layout>
    <Router>
      <AdminLogin path="/auth/login/admin"/>
      <AttendantLogin path="/auth/login/attendant"/>
      <CustomerLogin path="/auth/login/customer"/>
      <Callback path="/auth/callback" />
    </Router>
  </Layout>
)

export default Auth