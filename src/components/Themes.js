import { ThemesCss } from "../css/Themes.css"

export function Themes(props){
    return(
        <button className="theme-btn">
            <label>{props.name}</label>
        </button>
    );
}