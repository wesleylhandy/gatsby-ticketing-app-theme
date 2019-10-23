exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
  if (page.path.match(/^\/auth/)) {
      page.matchPath = `/auth/*`
  
      // Update the page.
      createPage(page)
  }
}