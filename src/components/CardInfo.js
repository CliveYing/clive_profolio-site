import React from 'react';
import {useSpring, animated} from 'react-spring';
import './components.css';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity:0}});

    return(
        <animated.div className = "g-card-info" style = {style}>
            <p className="g-card-title">{props.title} </p>
            {/* <p className="g-card-sub-title"> {props.subTitle} </p> */}
            <div>
                {props.subTitle.split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
                })}
            </div>
            <a className="g-card-link" href = {props.link} target="_blank" rel="noopener noreferrer"> View </a>
        </animated.div>
    )

}

export default CardInfo;