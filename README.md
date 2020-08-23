# github-battle
Github Battle ReactJS App

## Application Tree
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # RaP NLP Icon.
│   └── index.html
└── app
    ├── index.css # Styles for your app. Feel free to customize this as you desire.
    ├── index.html # This is the root of your app. Contains static HTML right now.
    ├── index.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
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
    │   └── useHover.js #useHover hook
    ├── utils
    │   └── api.js #fetch Github API Data
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
