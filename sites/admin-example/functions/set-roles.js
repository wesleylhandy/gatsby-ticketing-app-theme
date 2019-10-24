import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;

  if (!user) {
    return {
      statusCode: 400,
      body: "NOT ALLOWED"
    };
  }

  const data = JSON.parse(event.body);

  const {
    id = "",
    newRoles = [],
    currentRoles = [],
    programmatic = false
  } = data;

  if (
    (!id || !currentRole.includes("admin") || newRoles.length === 0) &&
    !programmatic
  ) {
    return {
      statusCode: 400,
      body: "NOT ALLOWED"
    };
  }

  const userId = id;

  const usersUrl = `${identity.url}/admin/users/${userId}`;
  const adminAuthHeader = "Bearer " + identity.token;

  const roles = Array.from(new Set([...newRoles, ...currentRoles]));

  const attributes = {
    app_metadata: {
      roles,
      my_user_info: "some info"
    }
  };

  try {
    return fetch(usersUrl, {
      method: "PUT",
      headers: {
        Authorization: adminAuthHeader
      },
      body: JSON.stringify(attributes)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Updated the user");
        console.log(JSON.stringify({ data }));
        return { statusCode: 204 };
      })
      .catch(e => {
        console.error("Internal Fetch Error");
        throw new Error(e.message);
      });
  } catch (e) {
    return e;
  }
};
