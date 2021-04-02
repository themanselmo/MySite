import React from "react"
import {useStaticQuery, Link, graphql } from "gatsby"
const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem'}}>
        <header style={{ marginBottom: '1.5rem' }}>
            <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
                <h3 style={{ display: 'inline' }}>Max's Space</h3>
            </Link>
            <ul style={{ listStyle: 'none', float: 'right' }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="https://drive.google.com/file/d/14ZeerhIgzFm0GnSCOD6XSBDWBV3dMpyk/view?usp=sharing">Resume</ListLink>
                <ListLink to="https://github.com/themanselmo">GitHub</ListLink>
            </ul>
        </header>
        {children}
    </div>
)