console.log("OK");




// Create an array to store the new list items the user enters 
var list = [ ];

newListItem = function () {
	// get the value the user entered in the upper text form field
	var newLiValue = document.getElementById('new-list-item-1').value;
	// log that value to the console to make sure we got it. 
	console.log(newLiValue);
	var results = document.getElementById('newList')
	results.innerHTML += "<li id='added-list-item'>" 
	+ newLiValue 
	+ '<input type="checkbox" class="gotit"><span class="glyphicon glyphicon-remove" onclick="return deleteListItem();" aria-hidden="true" id="remove"></span><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></li>' 
	//	Clear the input field for the next entry
	$('#new-list-item-1').val('');
};

// Fire the newListItem function when the user hits enter
document.getElementById('new-list-item-1').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		newListItem ();
	}
});

// Add a delete function that triggers only when there's at least one item in the list array 

function deleteListItem() {

	var removeThis = document.getElementById('added-list-item');
	removeThis.parentNode.removeChild(removeThis);
	return false;
}

//  COLLAPSIBLE DIVS IN CART

$( "#plus-toggle" ).click(function() {
  $( "#cart-list-item" ).toggle( "fade", 400 );
});



