// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const friends = [];
const newFriendInput = document.getElementById("amigo");
const addFriendButton = document.querySelector(".button-add");
const agregarAmigo = () => {
    const newFriend = newFriendInput.value;
    if(newFriend.length === 0) {
        alert("Por favor, inserte un nombre.");
        return 
    } 
    friends.push(newFriend);
    newFriendInput.value = "";
}  
