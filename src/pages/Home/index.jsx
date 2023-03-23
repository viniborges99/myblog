import React from "react"
import FeaturedPost from "../../components/featured-post";
import Escritorio from "../../assets/img/escritorio.jpg"
import Cidade from "../../assets/img/cidade.jpg"
import Trem from "../../assets/img/trem.jpg"
import PostList from "../../components/post-list";


export default function Home(){

    const posts = [
        {
            image:`${Escritorio}`,
            date: "mai 10 2018",
            title:"Curtindo a vida",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto totam ipsam enim atque excepturi soluta, eaque sunt modi voluptate ullam natus optio dolore inventore ipsum sapiente quaerat voluptatem, tenetur illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium incidunt itaque laborum quisquam repellendus sunt eveniet numquam fugit pariatur consequuntur non dolorum, rem placeat illo sint hic tenetur tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: `${Trem}`,
            data: "mar 22, 2021",
            title:"post trem",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto totam ipsam enim atque excepturi soluta, eaque sunt modi voluptate ullam natus optio dolore inventore ipsum sapiente quaerat voluptatem, tenetur illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium incidunt itaque laborum quisquam repellendus sunt eveniet numquam fugit pariatur consequuntur non dolorum, rem placeat.",
        },
        {
            image: `${Cidade}`,
            data: "nov 25, 2016",
            title:"my city",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto totam ipsam enim atque excepturi soluta, eaque sunt modi voluptate ullam natus optio dolore inventore ipsum sapiente quaerat voluptatem, tenetur illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ]
    return(
        <div>
           <FeaturedPost/>
            <PostList posts={posts}/>
            
        </div>
    );
}