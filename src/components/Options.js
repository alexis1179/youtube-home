import { optionsCss } from "../css/Options.css";

export function Options(props){
    return(
        <div className="container">
            <a href="#" className="link">
                <img src="" alt="" srcset="" />
                <label className="name">{props.name}</label>
            </a>
        </div>
    );
}