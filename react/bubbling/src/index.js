/* index.js */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'; /* bubbling intro */
import AppClick from './appClick.js'; /* clickMe assignment */
import AppList from './appList.js'; /* list and keys */
import AppSurvey from './appSurvey.js'; /* Survey form assignment */
import "./index.css";

ReactDOM.render(
    <AppSurvey />,
    document.getElementById('main')
);
