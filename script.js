// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 




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
	// b.appendChild(document.createTextNode("delete")); // put into function
	// b.setAttribute("id", "delete"); // put into function
	// b.setAttribute("random", lastid);	// put into function
	li.setAttribute("random", lastid);
	// li.appendChild(createDeleteEle());

	ul.appendChild(li);
	li.appendChild(createDeleteEle());
	li.insertAdjacentElement('afterend',createDeleteEle()); // wrks
	// li.after(createDeleteEle()); //worls
	input.value = "";
}

function createDeleteEle () {
	var b = document.createElement("button");
	b.appendChild(document.createTextNode("delete")); // put into function
	b.setAttribute("id", "delete"); // put into function

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
		// i.appendChild(createDeleteEle());
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
    // let item = document.getElementById("delete").parentElement; // or parentNode
    event.target.parentElement.remove();
    // event.currentTarget.removeChild(event.target.closest('li'));
    // event.currentTarget.removeChild(item); //works
    // document.getElementById("delete").parentNode.parentNode.removeChild(d); //works
	}

     //event.currentTarget, which is the element that is actually calling the listener (i.e. the on which the listener has been attached)
 // event.currentTarget.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener('click', clickList);

