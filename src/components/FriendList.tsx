import { useState } from "react";
import { Friend } from "../models/Friend";
import { friendGroup, addFriend } from "../models/friendGroup";
import FriendForm from "./FriendForm";

function FriendList() {

  // use the list imported from the "database" to populate
  // the state imported from models/friendGroup.ts
  let [ friends, setFriends ] = useState<Friend[]>(friendGroup);

  function handleAdd(friend: Friend){
        // update the state so the component displays
        // the new object as we've done before
        setFriends(prevFriends => {
          const newFriends = prevFriends.slice(0);
          newFriends.push(friend);
          return newFriends;
        });
        // but also, add it to the database in models/friendGroup.ts
        addFriend(friend);
  }

  return (
    <div className="FriendList">
      <ul>
        {friends.map((friend, i) => 
        <li key={i}>{friend.name} - {friend.favoriteSong}</li>
        )
        }
      </ul>
      <FriendForm onSubmit={handleAdd}/>
    </div>
  );
}

export default FriendList;
