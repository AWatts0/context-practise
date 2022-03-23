import { createContext, useContext, useState } from "react";

const themeContext = createContext("light");

function ThemeProvider(props){

    //need to add use context here to use our above default.
    const [theme, setTheme] = useState(useContext(themeContext));
    return(
        <themeContext.Provider value={[theme, setTheme]} {...props} />
    )
}

export {themeContext, ThemeProvider};