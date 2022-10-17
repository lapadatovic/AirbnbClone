import React from "react";
import './Card.css'
// import zaferesPhoto from '../../Images/zaferes.png'
// import logo from '../../Images/logo.svg'
// import starPhoto from '/star.png'
// import photo from '../../../public/Images'



function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if(props.item.location === 'Online'){
        badgeText = 'Online'
    }
    return(
        <div className="card">
            {badgeText && <div className="sold--out-badge">
                {badgeText} </div>
            }
            <img 
                className="card--image" 
                src={props.item.coverImg}
                >    
            </img>
            <div className='card--stats'>
                <img className="card--star" src='Images/star.png'></img>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCounts})&bull; </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span>/person</p>
        </div>
    )
}

export default Card;