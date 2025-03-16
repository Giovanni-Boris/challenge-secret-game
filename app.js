// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const friends = [];
const newFriendInput = document.getElementById("amigo");
const addFriendButton = document.querySelector(".button-add");
const listFriends = document.getElementById("listaAmigos");
const resultTag = document.getElementById("resultado");


const addFriendToScreen = () => {
	listFriends.innerHTML = "";
	const fragment = document.createDocumentFragment();
	for (friend of friends) {
		const li = document.createElement("li");
		li.textContent = friend;
		fragment.appendChild(li);
	}
	listFriends.appendChild(fragment);
};

const agregarAmigo = () => {
	const newFriend = newFriendInput.value;
	if (newFriend.length === 0) {
		alert("Por favor, inserte un nombre.");
		return;
	}
	friends.push(newFriend);
	newFriendInput.value = "";
	addFriendToScreen();
};

const sortearAmigo = () => {
    if (friends.length === 0) return;
	const randomIdx = Math.floor(Math.random() * friends.length);
    resultTag.innerHTML = friends[randomIdx];
};
