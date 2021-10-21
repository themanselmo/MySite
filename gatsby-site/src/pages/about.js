import React from "react"
import Layout from "../components/layout"
import me from "../images/headshot.jpg"
export default () => (
    <Layout>
        <img src={me} alt="yours truly"/>
        <h1>About me</h1>
        <p>
            Full Stack developer, currently enrolled in the Software Engineering Live program at Flatiron School, and trying to save the world one bit at a time. 
        </p>
        <h2>Hobbies</h2>
        <p>
            When I'm not working on my programming projects, I like to spend my time doing a variety 
            of things such as..
        </p>
        <ul id="list_item_row">
            <li>Cooking</li>
            <li>Weight Training</li>
            <li>Hiking</li>
            <li>Playing video games</li>
            <li>Spending time in the garden</li>            
        </ul>
    </Layout>
) 