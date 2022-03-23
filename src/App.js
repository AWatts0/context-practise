import './App.css';
import React from 'react';
import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"
import ThemeControl from "./components/themeControl"
import themeContext from './context/ThemeContex';
import {ThemeProvider} from "./context/ThemeContex"


function App() {
  return (
    <div className="App">
      {/* the .Provider value listed below will change the themeContext listing in the below elements of everything it wraps around. It sets a global context*/}
      {/* <themeContext.Provider value="medium"> */}
      <ThemeProvider>
        <Header />
        <Body />
        <Footer />
        <ThemeControl />
      </ThemeProvider>
      {/* </themeContext.Provider> */}
    </div>
  );
}


export default App;
