/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: '975bf280-fd91-488c-994c-2f04416e5ee3', // Fill in your Project ID
        languageCodenames: [
          'en-US',
          'es-ES', // Languages in your project (Project settings -> Localization),
        ],
      },
    },
  ],
}
