# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Github Page
https://dong-yi-xia.github.io/ZTM_React_monsters-rolodex/.

## Resource
React Developer Tools<br>
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en<br>

Reactjs Doc<br>
https://reactjs.org/docs/create-a-new-react-app.html<br>

Install node and nvm<br>
https://github.com/nvm-sh/nvm<br>
https://nodejs.org/en/<br>

sandbox<br>
https://codesandbox.io/s/new<br>

git for windows<br>
https://gitforwindows.org/<br>

json placeholder API<br>
https://jsonplaceholder.typicode.com/users<br>

Css Grid<br>
https://gridbyexample.com/what/<br>
https://css-tricks.com/snippets/css/complete-guide-grid/<br>

Robot Hash API<br>
https://robohash.org/1?set=set2<br>

onchange Event<br>
https://www.w3schools.com/jsref/event_onchange.asp<br>

Synthetic Event<br>
https://reactjs.org/docs/events.html<br>

github add Ssh key to github<br>
https://docs.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent<br>


### Deploy on GitHub Page with React
npm install gh-pages / npm add gh-pages <br>

In package.json <br>
    "homepage": "github pages link", <br>

Inside the script tag add <br>
    "predeploy": "npm run build",  or  "predeploy": "yarn build", <br>
    "deploy": "gh-pages -d build"  <br>

In the terminal <br>
    npm run deploy / yarn deploy <br>
    Git add. Git commit. Git push<br>

In github pages. Select gh-pages branch. <br>
