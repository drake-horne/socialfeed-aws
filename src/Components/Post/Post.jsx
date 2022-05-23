import React, {useState, useEffect} from 'react';
import {ReactComponent as ThumbsUp} from "../../SVG/thumbs-up-solid.svg"
import {ReactComponent as ThumbsDown} from '../../SVG/thumbs-down-solid.svg';
import { Card, Row } from 'react-bootstrap';
import "./Post.css"

const Post = (props) => {

    const [likeColor, setLikeColor] = useState("grey");
    const [dislikeColor, setDislikeColor] = useState("grey");

    function toggleLikeDislike(type){
        if(type === "like"){
            setLikeColor("green");
            setDislikeColor("grey");
            //Set Like color to GREEN
            //Set Dislike color to GREY
        }
        else if(type ==="dislike"){
            setLikeColor("grey");
            setDislikeColor("red");
            //Set Like color to GREY
            //Set Dislike color to RED
        }
        else{
            alert("Error with like/dislike toggle!");
        }
    }
    return ( 
        <div className = "post-box">
           <p>{props.post.postName}</p>
           <p>{props.post.postBody}</p>
           <span>
           <ThumbsUp height='1rem' fill={likeColor} style={{'margin-right': '1em'}} onClick={() => toggleLikeDislike("like")}/>
           <ThumbsDown height='1rem' fill={dislikeColor} onClick={()=> toggleLikeDislike("dislike")}/>               
           </span>
        </div>

     );
}
 
export default Post;