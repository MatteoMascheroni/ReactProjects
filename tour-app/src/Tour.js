import React,{useState} from "react"

const Tour = ({id,image,info,name,price,onDelete = f => f}) => {
    const [isReadMore, setIsReadMore] = useState(false);
    return(
        <article>
            <h4>{name}</h4>
            <img src={image} alt="error loading image"></img>
            <p>{isReadMore ? info : `${info.split(" ").slice(0,info.split(" ").length / 2).join(" ")}...`}
            <button onClick = {() => setIsReadMore(!isReadMore)}>
                {!isReadMore ? "Read More" : "Show Less"}
            </button>
            </p>
            <p>Price: {price}</p>
            <button onClick={() => onDelete(id)}>I'm Not Iterested</button>
        </article>
    )
}

export default Tour;