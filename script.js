// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 




var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var strike = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.addEventListener("click", clickList);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
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

function clickList(event) {
	strikeLen = strike.length;

	// for(let i = 0; i<strikeLen; i++) {
	// 	strike[i].classList.toggle("done");
	// }

	// if (event.target && event.target.matches("li.bold")) {
 //    event.target.classList.toggle("done"); // new class name here
 //    }
 // event.target.classList.toggle("done");
 event.currentTarget.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// strike.addEventListener("click", clickList);
 for (var i = 0; i < strike.length; i++) {
  strike[i].addEventListener("click", clickList);
}
// item[i].addEventListener("click", itemDone);
// strike[x].classList.toggle("done");


