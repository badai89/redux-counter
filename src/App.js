import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import {reduxStore} from './component/redux'
import Counter from './component/counter'

const App = () => {
  return (
    <Provider store={reduxStore}>
       <div>
         <h1>REDUX</h1>
         {/* <Content /> */}
         <Counter />
       </div>
    </Provider>
  );
};

export default App;
