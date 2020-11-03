import React,{useState} from "react"
import BirthdayItem from "./BirtdayItems"
import data from"../data/birthdayList.js"

export default function BirthdayList(){
    const [birthday,clearAllData] = useState(data)

    return(
        <div>
            <h3>{birthday.length} birthdays today</h3>
            {birthday.map(item => <BirthdayItem key={item.id} {...item}/>)}
            <button onClick={()=>clearAllData([])}>Clear All</button>
        </div>
    )
}