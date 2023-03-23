import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import Carro from "../../assets/img/carro.jpg"
export default function FeaturedPost(){
    return(
        <div className="featured-post">
            <div>
                <img className="img-principal" src={Carro} alt="Post principal"/>
            </div>
            <div className="container-description">
                <p className="post-date">jun 11, 2023</p>
                <Link to="/post"><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2></Link>
                <p className="post-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto totam ipsam enim atque excepturi soluta, eaque sunt modi voluptate ullam natus optio dolore inventore ipsum sapiente quaerat voluptatem, tenetur illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium incidunt itaque laborum quisquam repellendus sunt eveniet numquam fugit pariatur consequuntur non dolorum, rem placeat illo sint hic tenetur tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}