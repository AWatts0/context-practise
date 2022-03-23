import { useContext } from "react";
import {themeContext} from "../context/ThemeContex";


const Header = function(props){
    const themeType = useContext(themeContext);

    return(
        <h1>
            This is the header. Themed by {themeType}
        </h1>
    )
}

export default Header;