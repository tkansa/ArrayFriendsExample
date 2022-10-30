import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Song } from "../models/Song";
import { songs } from "../models/songs";



function SongDetail() {

    const id: number = parseInt(useParams().id!);
    let foundSong: Song | undefined = songs.find(s => s.id === id);
    if(!foundSong){
        foundSong = { id: 0, title: "Sorry!", artist: "No song found.", favorite: false };
    }

    return (
        <div className="SongDetail">
            <div>{foundSong.title} - {foundSong.artist}</div>
            <div>{foundSong.favorite && <p>&#9829;</p>}</div>
            <Link to="/">Home</Link>
        </div>
        
    );
}

export default SongDetail;
