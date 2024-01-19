import React, {useEffect} from "react";
import { useRecoilValue } from "recoil";
import { userData } from "../states";

export default function Info(){

    const {avatar, name, bio, twitter, github} = useRecoilValue(userData);

    return(
        <div id="card">
            <img src={avatar}></img>
            <h3>{name}</h3>
            <p>{bio}</p>
            <button onClick={() => window.location.href = `https://twitter.com/${twitter}`}>Twitter</button>
            <button onClick={() => window.location.href = github}>Github</button>
        </div>
    )
}