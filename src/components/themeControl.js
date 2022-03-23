import { useContext } from "react";
import {themeContext, ThemeProvider} from "../context/ThemeContex";


const ThemeControl = function(props){

    let [theme, setTheme] = useContext(themeContext);

    function toggleTheme()
    {
        if(theme === "light"){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }

    }


    return(
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}

export default ThemeControl;