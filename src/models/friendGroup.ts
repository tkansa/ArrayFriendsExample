import { Friend } from "./Friend";


// make an array to hold your objects (can be empty at first)
export let friendGroup: Friend[] = [
  { name: "Marvin", favoriteSong: "BeepBeepBoop" },
  { name: "Moe", favoriteSong: "Meoooooooow" },
  { name: "Yuri", favoriteSong: "doododooodoodoo" },
];

// make a function to add to your array
export function addFriend(friend: Friend){
  friendGroup.push(friend);
}

// could also add other CRUD functions like delete, edit, etc.
export function deleteFriend(id: number){
  // use the id to find the correct friend
  // and delete it
}
