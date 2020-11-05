import React from "react"

const Tour = ({image,info,name,price}) => {
    return(
        <article>
            <h4>{name}</h4>
            <img src={image} alt="error loading image"></img>
            <p>{info}</p>
            <p>Price: {price}</p>
        </article>
    )
}

export default Tour;