


export function Videos(props){
    return (
        <div className="container">
            <div className="picture">
                <img src={require('../resources/img-'+props.name+'.jpg')} alt={props.name} srcset="" />
            </div>
            <div className="description">
                <div className="description-section sec1">
                    <img src={require('../resources/icon-user.png')} alt="" />
                    <div className="description-section-title">
                        {props.title}
                    </div>
                </div>
                <div className="description-section sec2">
                    <div className="description-section-author">
                        {props.author}
                    </div>
                    <div className="description-section-data">
                        <span className='views'>{props.views}</span>
                        <span className='date'>{props.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}