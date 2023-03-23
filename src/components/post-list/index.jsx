import React from "react"
import "./styles.css"

import Post from "../../components/post";


export default function PostList({posts}){
    return(
        <div className="post-list-container">
          {
            posts && posts.map((post)=>{
                return <Post post={post}/>
            })
          }
            
        </div>
    );
}