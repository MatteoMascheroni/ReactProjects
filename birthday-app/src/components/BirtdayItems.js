import React from "react"

export default function BirthdayItem({name,age,image}){
    return(
        <div>
            <image src="{image}"/>
            <h4>{name}</h4>
            <p>Compie {age+1}</p>
        </div>
    )
}