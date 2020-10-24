[![Netlify Status](https://api.netlify.com/api/v1/badges/f61d8db0-2e2d-4e58-9b69-80741fec3113/deploy-status)](https://app.netlify.com/sites/github-battle-js/deploys)

# Github Battle

GithubAPI Profile competition app.

## ⚙ Features

- React 17
- React Router v6
- React Hooks
- ES8
- PropTypes
- Light/Dark Theme

## 👁️‍🗨️ Project Preview

|                                                                                                                                                         Light Mode                                                                                                                                                         |                                                                                                                                                         Dark Mode                                                                                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![](https://user-images.githubusercontent.com/2933430/53439193-c39e1f00-39be-11e9-848f-d327f0ef5f53.png) ![](https://user-images.githubusercontent.com/2933430/53439196-c39e1f00-39be-11e9-875e-6f4aea52f099.png) ![](https://user-images.githubusercontent.com/2933430/53439197-c39e1f00-39be-11e9-8d17-d303692e5dd2.png) | ![](https://user-images.githubusercontent.com/2933430/53439194-c39e1f00-39be-11e9-8302-dcea6dae726a.png) ![](https://user-images.githubusercontent.com/2933430/53439195-c39e1f00-39be-11e9-9d10-488311266460.png) ![](https://user-images.githubusercontent.com/2933430/53439198-c39e1f00-39be-11e9-8bb8-d12687113a2e.png) |

## 🗺 URL Tree

```bash
├── /                          #Home
├── /battle                    #Battle
└── /*                         #404
```

## 🌿 Application Tree

```bash
├── README.md
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── publicinde
│   ├── favicon.ico
│   └── index.html
└── app
    ├── index.css # Styles for your app.
    ├── index.html # App root with static HTML
    ├── index.js # Used for testing. Testing coming soon.
    ├── components
    │   ├── Battle.js
    │   ├── Card.js
    │   ├── Loading.js
    │   ├── Nav.js
    │   ├── Popular.js
    │   ├── Results.js
    │   └── Tooltip.js
    ├── contexts
    │   └── theme.js
    ├── hooks
    │   └── useHover.js # useHover hook
    ├── utils
    │   └── api.js #fetch Github API Data
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## ⛰️ Roadmap

- Mobile version

## 📝 Todos

- Add React 17 transform-jsx runtime automatic
