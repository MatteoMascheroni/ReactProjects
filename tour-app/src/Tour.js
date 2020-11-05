import React,{useState} from "react"

const Tour = ({image,info,name,price}) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const subst = (testo) => {
        let testo_arr  = testo.split(" ");
        return(testo_arr.slice(0,(testo.length)/2).join(" "));
    }
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
        </article>
    )
}

export default Tour;