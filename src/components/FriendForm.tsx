import { FormEvent, useState } from "react";
import { Friend } from "../models/Friend";

interface Props {
    onSubmit: (friend: Friend) => void;
}

function FriendForm({onSubmit}: Props) {

    let [ name, setName ] = useState("");
    let [ favoriteSong, setFavoriteSong ] = useState("");

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        let friend: Friend = { name: name, favoriteSong: favoriteSong };
        onSubmit(friend);
        setName("");
        setFavoriteSong("");
    }


    return (
        <div className="FriendForm">
            <form onSubmit={handleSubmit}>
                <div>Name:<input value={name} onChange={e => setName(e.target.value)}/></div>
                <div>Favorite Song:<input value={favoriteSong} onChange={e => setFavoriteSong(e.target.value)}/></div>
                <button type="submit">Add Friend</button>
            </form>

        </div>
    );
}

export default FriendForm;
