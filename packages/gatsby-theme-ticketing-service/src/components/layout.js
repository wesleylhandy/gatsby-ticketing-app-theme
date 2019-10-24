import React from "react";
import IdentityModal, {
  useIdentityContext
} from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import "./widget-styles.css";
// react SSR doesnt support suspense yet

const Layout = ({ children }) => {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName";

  console.log(JSON.stringify(identity));
  const isLoggedIn = identity && identity.isLoggedIn;
  return (
    <>
      <nav style={{ background: "green" }}>
        {" "}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  );
};

export default Layout;
