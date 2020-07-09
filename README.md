<h1 align="center">
  Ayman's blog 📄 site 
</h1>


<h2 align="center">
  Made with :love_letter: using 
</h2>


<p align="center">

  <a href="https://tailwindcss.com/">
    <img alt="TailWind" src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb" width="60" />
  </a>
  
  <a href="https://gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
  <a href="https://graphql.org/">
    <img alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" width="60" />
  </a>
  <a href="https://www.netlify.com/">
    <img alt="Netlify" src="https://miro.medium.com/max/500/0*TwqQJI0YFBZEzjcV.png" width="60" />
  </a>


  <a href="https://disqus.com/features/engage/">
    <img alt="Disqus" src="https://c.disquscdn.com/next/c393ff4/marketing/assets/img/brand/disqus-social-icon-blue-white.svg" width="60" />
  </a>

  <a href="https://www.algolia.com/doc/">
    <img alt="Algolia" src="https://avatars0.githubusercontent.com/u/2034458?s=280&v=4s" width="60" />
  </a>



  
  
</p>


<h3 align="center">
  Learn what matters
</h3>
<p align="center">
  <!--
  <a href="https://github.com/gatsbyjs/gatsby/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gatsby is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/gatsbyjs/gatsby">
    <img src="https://circleci.com/gh/gatsbyjs/gatsby.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://www.npmjs.org/package/gatsby">
    <img src="https://img.shields.io/npm/v/gatsby.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby?minimal=true">
    <img src="https://img.shields.io/npm/dm/gatsby.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby?minimal=true">
    <img src="https://img.shields.io/npm/dt/gatsby.svg" alt="Total downloads on npm." />
  </a>
  -->
  <a href="https://gatsbyjs.org/contributing/how-to-contribute/">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/@aymanace97">
    <img src="https://img.shields.io/twitter/follow/aymanace97?label=Follow%20Me&style=social" alt="Follow @aymanace97" />
  </a>
</p>

<!--
<h3 align="center">
  <a href="https://gatsbyjs.org/docs/">Quickstart</a>
  <span> · </span>
  <a href="https://gatsbyjs.org/tutorial/">Tutorial</a>
  <span> · </span>
  <a href="https://gatsbyjs.org/plugins/">Plugins</a>
  <span> · </span>
  <a href="https://gatsbyjs.org/starters/">Starters</a>
  <span> · </span>
  <a href="https://gatsbyjs.org/showcase/">Showcase</a>
  <span> · </span>
  <a href="https://gatsbyjs.org/contributing/how-to-contribute/">Contribute</a>
  <span> · </span>
  Support: <a href="https://spectrum.chat/gatsby-js">Spectrum</a>
  <span> & </span>
  <a href="https://gatsby.dev/discord">Discord</a>
</h3>

-->


<h1><img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" height="20" /> Gatsby</h1>

## `gatsby-config.js`

All configurations are stored in `gatsby-config.js`

For any `npm install gatsby-<plugin>`; add properties in `gatsby-config.js.plugins` array.


## `gatsby-plugin-sharp`

Handles image loading 



<h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/25px-GraphQL_Logo.svg.png">GraphQL</h1>


## Posts Query

```graphql
  query{
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC} ){
      edges{
        node{
	  id	
          frontmatter{
            title
            date(formatString: "Do MMM YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
```

<h1><img alt="Disqus" src="https://c.disquscdn.com/next/c393ff4/marketing/assets/img/brand/disqus-social-icon-blue-white.svg" height="25" /> Disqus</h1>

## Steps 

<h1><img alt="Netlify" src="https://miro.medium.com/max/500/0*TwqQJI0YFBZEzjcV.png" height="25" /> Netlify</h1>

## Steps to deploy


<h1><img alt="Algolia" src="https://avatars0.githubusercontent.com/u/2034458?s=280&v=4s" height="27" /> Algolia</h1>

## Setup Algolia