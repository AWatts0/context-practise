import { useContext } from "react";
import {themeContext} from "../context/ThemeContex";



const Footer = function(props){
    const themeType = useContext(themeContext);

    return(
        <footer>
            This is the footer. ({themeType})
        </footer>
    )
}

export default Footer;