/* index.js */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'; /* bubbling intro */
import AppClick from './appClick.js'; /* clickMe assignment */
import AppList from './appList.js'; /* list and keys */
import AppSurvey from './appSurvey.js'; /* Survey form assignment */
import AppTask from './appTask.js'; /* Task manager assignment */
import "./index.css";

ReactDOM.render(
    <AppTask />,
    document.getElementById('main')
);
