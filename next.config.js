const withImages = require('next-images')
const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true
})

module.exports = withImages({
  reactStrictMode: true,
  images: {
    loader: "imgix",
    disableStaticImages: true
  },
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
})