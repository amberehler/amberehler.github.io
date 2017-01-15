function askQuestions() {


var firstName = prompt('What is your first name?'),
	lastName = prompt('What is your last name?'),
	fullName = firstName + ' ' + lastName;
console.log(fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age>=18) {

	console.log('User is an adult');
} else if (age >=13) {

	console.log('User is a teenager');

} else {

	console.log('User is a child');
}

if (firstName.toLowerCase() == "General" && lastName.toLowerCase() !== "Assembly") {
	console.log ("Greetings");
		}
	}


// When the page has loaded
$(function() { 

// When the user clicks an h3 element
$('h3').on('click', function() {

// Hide the next element
$(this).next().slideToggle(900);

	});

});


