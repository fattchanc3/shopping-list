var button = document.getElementById("enter");
var input = document.getElementById("userinput");
// var del = document.getElementById("del");
var ul = document.querySelector("ul");
var list = document.getElementsByClassName("list");
var del = "";
var lastid = Number(document.querySelector("li").getAttribute("random")); //23
var strike = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	// var b = createDeleteEle();
	
	li.appendChild(document.createTextNode(input.value));
	lastid += 1;
	li.setAttribute("random", lastid);

	ul.appendChild(li);
	li.insertAdjacentElement('afterend',createDeleteEle());
	input.value = "";
}

function createDeleteEle () {
	var b = document.createElement("button");
	b.appendChild(document.createTextNode("delete")); // put into function
	b.setAttribute("id", "delete"); // put into function
	b.setAttribute("random", lastid); // put into function
	lastid += 1;
	return b;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//listAddDeleteButton IIFE
(function listAddDeleteButton() {
	for (let i of strike) {
		if (i.getAttribute("random") !== "") {
			i.setAttribute("random", lastid);
		}
		i.insertAdjacentElement('afterend',createDeleteEle());
	}
}());

function testOnly() {
	event.target.classList.toggle("done");
}

function clickList(event) {
 	// event.target, which is the element on which the event actually occurred
	if(event.target.nodeName === "LI"){
			testOnly();
	}
	if(event.target.id === "delete"){
event.currentTarget.removeChild(event.target.previousSibling) && event.target.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener('click', clickList);

