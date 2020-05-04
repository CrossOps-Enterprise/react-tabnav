<h1 align="center" style="font-size: 50px; border:none;">React Tab Navigation</h1>

<div align="center" style="border: transparent">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub issues open](https://img.shields.io/github/issues/CrossOps-Enterprise/react-tabnavigation)](https://github.com/CrossOps-Enterprise/react-tabnavigation/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/CrossOps-enterprise/react-tabnavigation)](https://github.com/CrossOps-Enterprise/react-tabnavigation/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🚀 Installation <a name="installation"></a>

You can install the package using yarn or npm

### npm
```
npm install react-tabnavigation
```

### yarn
```
yarn add react-tabnavigation
```
---
## 💡 Usage <a name="usage"></a>

```
Import React from 'react'
import TabNav from 'react-tabnavigation'

<TabNav data={
  [{
    tabName: 'Dummy',
    Component: Dummy
    componentProps: {
      prop1: 'dummy prop 1',
      prop2: 'dummy props 2',
    }
  }]
}>
```
---

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Frontend Library
- [Babel](https://babeljs.io/) - Use next generation JavaScript, today.
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Webpack](https://webpack.js.org/) - Javascript Bundler

---
## ✍️ Authors <a name = "authors"></a>

- [@umairx97](https://github.com/umairx97) - Idea & Initial work

---
## 🤖 Todo 
- Add Tests
- Fix intellisense for props
- Less dependencies