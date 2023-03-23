import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

export default function Post({post}){
    return(
        <div className="post">
            <div>
                <img className="img-principal"src={post.image} alt="Post principal"/>
            </div>
            <div className="container-description">
                <p className="post-date">{post.date}</p>
                <Link to="/post"><h3>{post.title}</h3></Link>
                <p className="post-description">{post.description}</p>
            </div>
        </div>
    )
}