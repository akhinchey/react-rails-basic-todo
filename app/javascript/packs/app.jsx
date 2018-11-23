import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import List from './components/list';


const apps = { Main, List };
const appEL = document.getElementById('app');
const appData = !!appEL && appEL.getAttribute('data-props');
const App = !!appEL && apps[appEL.className];

if (App) {
  ReactDOM.render(<App appData={appData} />, document.getElementById("app"));
}
