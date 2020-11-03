import React,{useState} from "react"
import BirthdayItem from "./BirtdayItems"
import data from"../data/birthdayList.js"

export default function BirthdayList(){
    const [birthday,clearAllData] = useState(data)

    return(
        <main>
            <section className="container">
                <h3>Todays there are {birthday.length} birthdays</h3>
                {birthday.map(item => <BirthdayItem key={item.id} {...item}/>)}
                {birthday.length > 0 && <button onClick={()=>clearAllData([])}>Clear All</button> }
            </section>
        </main>
    )
}