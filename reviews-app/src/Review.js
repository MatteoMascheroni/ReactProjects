import React from "react";

export default function Review ({id,name,job,image,text, onNext = f => f, onPrev = f=> f,onSurprise = f => f}) {
    console.log(id);
    return(
        <article>
            <img scr={image}></img>
            <h4>{name}</h4>
            <p>{job}</p>
            <p>{text}</p>
            <div>
                <button onClick= {() => onPrev(id)}>Prev</button>
                <button onClick={() => onNext(id)}>Next</button>
            </div>
            <div>
                <button onClick={()=> onSurprise(id)}>Surprise Me</button>
            </div>
        </article>
    )
    
}

