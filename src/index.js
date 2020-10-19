import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page from './page/index';
// import NameForm from './NameForm';
// import OuterClickExample from './OuterClick';

ReactDOM.render(
  <div>
    <Page />
    <App />
    
    {/* <OuterClickExample />
    <NameForm /> */}
  </div>
  ,document.getElementById('root')
)