import { videosCss } from "../css/Videos.css"

export function Videos(props){
    return (
        <div className="Videos-container">
            <div className="picture">
                <img src={require('../resources/img-'+props.name+'.jpg')} alt={props.name} srcset="" />
            </div>
            <div className="description">
                <div className="description-icon">
                    <img src={require('../resources/icon-user.png')} alt="" />
                </div>
                <div className="description-text">
                    <div className="description-text-section sec1">
                        <div className="description-section-title">
                            {props.title}
                        </div>
                    </div>
                    <div className="description-text-section sec2">
                        <div className="description-section-author">
                            {props.author}
                        </div>
                    </div>
                    <div className="description-text-section data">
                        <span className='views'>{props.views} views</span>
                        <span className='date'>{props.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}