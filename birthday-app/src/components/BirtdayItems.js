import React from "react"

export default function BirthdayItem({name,age,image}){
    return(
        <article className="person">
            <img src={image} alt="zio bubu" />
            <div>    
                <h4>{name}</h4>
                <p>Compie {age+1} anni</p>
            </div>
        </article>
    )
}