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
// var lastid = parseInt(document.querySelector("li").getAttribute("random")); //23
var strike = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var b = document.createElement("button");
	
	li.appendChild(document.createTextNode(input.value));
	// lastid += 1;
	b.appendChild(document.createTextNode("delete")); // put into function
	b.setAttribute("id", "delete"); // put into function
	// b.setAttribute("random", lastid);	// put into function
	// li.setAttribute("random", lastid);
	li.appendChild(b);
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
//try to make delete by random id
// function deleteAfterClick() {
// 		let item = document.getElementById("delete").getAttribute("random"); //id
// 		if (document.querySelector("li").getAttribute("random") == item){
// 				// el = document.querySelector("li");
// 				el.remove();
// 			}
//     // document.getElementById("delete").parentNode.parentNode.removeChild(d);
// }

function addDeleteButton() {
	for (var i = 0; i < strike.length; i++) {
  	strike[i].addEventListener("click", clickList);
	}
}

function testOnly() {
	event.target.classList.toggle("done");
}

function clickList(event) {

	// if (event.target && event.target.matches("li.bold")) {
 //    event.target.classList.toggle("done"); // new class name here
 //    event.currentTarget.className+= " done";
 //    if (event.target.matches(".done"))
 //    	event.target.classList.toggle("done");
 //    }
 //    }

 // event.target.classList.toggle("done");

 	// event.target, which is the element on which the event actually occurred
	if(event.target.nodeName === "LI"){
			event.target.classList.toggle("done");
	}
	if(event.target.id === "delete"){
    // let item = document.getElementById("delete").parentElement; // or parentNode
    // event.currentTarget.removeChild(event.target.closest('li'));
    event.target.parentElement.remove();
    // event.currentTarget.removeChild(item); //works
    // document.getElementById("delete").parentNode.parentNode.removeChild(d); //works
	}

     //event.currentTarget, which is the element that is actually calling the listener (i.e. the on which the listener has been attached)
 // event.currentTarget.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
// strike.addEventListener("click", clickList);
//  for (var i = 0; i < strike.length; i++) {
//   strike[i].addEventListener("click", clickList);
// }
// document.body.addEventListener('click', clickList)
ul.addEventListener('click', clickList);
// b.addEventListener("click", deleteAfterClick);

