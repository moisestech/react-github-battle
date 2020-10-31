[![Netlify Status](https://api.netlify.com/api/v1/badges/f61d8db0-2e2d-4e58-9b69-80741fec3113/deploy-status)](https://app.netlify.com/sites/github-battle-js/deploys)

# Github Battle

<img src="https://raw.githubusercontent.com/moisestech/github-battle/master/public/assets/github-battle_logo.png" width="150px"/>

## **GithubAPI Profile competition app**

## ⚙ Features

- React 17
- React Router v5
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
├── package.json
├── public
│   ├── _redirects
│   ├── assets
│   │   ├── github-battle-1.png
│   │   ├── github-battle-2.png
│   │   ├── github-battle-3.png
│   │   ├── github-battle-4.png
│   │   ├── github-battle-5.png
│   │   ├── github-battle-6.png
│   │   └── github-battle_logo.png
│   └── index.html
├── src
│   ├── components
│   │   ├── Card
│   │   │   ├── card.css
│   │   │   └── index.js
│   │   ├── Loading
│   │   │   └── index.js
│   │   ├── Nav
│   │   │   ├── index.js
│   │   │   └── nav.css
│   │   └── Tooltip
│   │       └── index.js
│   ├── contexts
│   │   └── theme.js
│   ├── hooks
│   │   └── useHover.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Battle
│   │   │   ├── battle.css
│   │   │   ├── components
│   │   │   │   ├── Instructions
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── instructions.css
│   │   │   │   ├── PlayerInput
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── player-input.css
│   │   │   │   └── PlayerPreview
│   │   │   │       ├── index.js
│   │   │   │       └── player-preview.css
│   │   │   └── index.js
│   │   ├── Popular
│   │   │   ├── components
│   │   │   │   ├── LanguagesNav
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── languages-nav.css
│   │   │   │   └── ReposGrid
│   │   │   │       ├── index.js
│   │   │   │       └── repos-grid.css
│   │   │   ├── index.js
│   │   │   └── popular.css
│   │   └── Results
│   │       ├── components
│   │       │   └── ProfileList
│   │       │       ├── index.js
│   │       │       └── profile-list.css
│   │       ├── index.js
│   │       └── results.css
│   └── utils
│       └── api.js
└── webpack.config.js
```

## ⛰️ Roadmap

- Mobile version

## 📝 Todos

- Re-factor large components.
- Re-structure folders.
- Re-write in Typescript.
- Refactor in styled components.
- Handle input undefined username.
- Add Better preview images (larger, animated).
- Rename public assets for context.
- Add Favicon.
