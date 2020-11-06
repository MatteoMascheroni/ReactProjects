import React from "react"
import phoneImg from "./images/phone.svg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <article>
                    <h1>Payments infrastructure <br/> for the internet</h1>
                    <p>
                        Millions of companies of all sizes-from startups to Fortune 500s-us
                        Stripe's software and APIs to accept payments, send payouts, and manage 
                        their businesse online.
                    </p>
                    <button>Start Now</button>
                </article>
                <article>
                    <img src={phoneImg} alt="phone"/>
                </article>
            </div>
        </section>
    )
}

export default Hero;