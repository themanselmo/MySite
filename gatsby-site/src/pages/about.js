import React from "react"
import Layout from "../components/layout"
import me from "../images/headshot.jpg"
export default () => (
    <Layout>
        <h1>About me</h1>
        <p>Developing developer, pursuing a Bachelors in Computer Science and Engineering at the 
            University at Buffalo, and trying to save the world one bit at a time. 
        </p>
        <img src={me} alt="yours truly"/>
        <h2>Hobbies</h2>
        <p>When I'm not working on my programming projects, I like to spend my time doing a variety 
            of things such as..
        </p>
        <ul>
            <li>Cooking</li>
            <li>Weight Training</li>
            <li>Hiking</li>
            <li>Playing video games</li>
            <li>Spending time in the garden or monitoring my plants</li>            
        </ul>
    </Layout>
) 