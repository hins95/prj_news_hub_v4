# Introduction

## Demo URL

https://hins95.github.io/prj_news_hub_v4/dist/index.html#/

## Important Files

- `.umirc.js`
    - contains workbox options
    - webpack options / plugins
    - routing
    - HTML <head> contents

There are no index.html in dev. add `pages/document.ejs` when necessary

## Used Tools

- UI Library
    - Material UI Core / Icons
- UmiJS / Dva JS
    - React Library
    - Integrated Redux / Saga

## Features

- Single page application that displays news articles from newsapi.org

## Requirement Checklist

1. Display 100 news articles from Washington Post and New York Times.
    a. Use card component to display each news article.
        
    - `components/NewsCardView`
        
    b. Here is the API for generating news articles. (News API Documentation)
    
    - `models/news.js` -> `fetch()`
    
    - `services/news.js` -> `queryNews()`

    c. You will need to register your own API key in order to access the API. (Done)
     
    d. Data should be stored in a local data model.
       
   - `models/news.js` -> `state.news.articles`
    
2. Header should stay on page top when scrolling.

    - `layouts/Header.js` -> `Appbar/@position="fixed"`
    
3. Implement infinite scrolling.
    
    a. Each pagination should display only 10 news articles.
    
   - Implemented `React-Infinite-Scroller`
   
   - `pages/index.js` -> `<InfiniteScroll>` --> `news/fetchMore({isAppend, page})`
   
4. Each card component should have hyperlink linking to the news article.

    - Click Title on each news

5. Search bar on header component is used to filter news articles by matching keywords.
    
    a. When performing search, only list out news with titles and descriptions that contains the keywords in the search bar.
        
    - Debounced with 0.5s delay
         - Implemented with `redux-saga delay`
        
    b. Search is performed as the user is typing in the search bar.

    - fetch API When Search bar input value changes
        
        - `models/news.js` -> `setKeyword() --> saveKeyword --> initFetch`

**Bonus Requirements**

1. Codes are properly separated in different components and services.

    - Components
        - Layouts (Global)
        - Pages (Index)
        - Models (for Function Call)
        - Services (API request)
        
2. Proper SEO tags and open graph tags.

    - OpenGraph: `.umirc.js --> metas`
    
    - SEO Tags: `.umirc.js --> metas`
    
    (since there is one page , no need to use `react-helmet` to change meta tags dynamically; reducing bundle size)

3. Use Redux for development.

    - dva.js (integrated with redux / redux saga)

4. Use Styled Components or CSS pre-processors.

    - used Material UI built-in makeStyles in each component

5. Show loading indicator when fetching data.

    - used CircularProgress in `infinite scroll`, and `initFetch` loading status

6. Progressive web application (PWA) to cache API responses and image for offline access.

    - `.umirc.js` --> `workBoxOptions` `Cachable Response`

7. Performance optimization, avoid unnecessary calculation or rendering.

    - used babel plugin import: modular import for material ui to avoid loading unnecessary libraries
    
    - used `useMemo` to avoid unnecessary re-rendering
    
    - debounced update search keyword by redux saga delay
    
    - removed console logs after compiled