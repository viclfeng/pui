// JavaScript Document
function Tiger(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Tiger";
	this.image = "tiger.png";
}

function Panda(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Panda";
	this.image = "panda.png";
}

function Elephant(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Elephant";
	this.image = "elephant.png";
}

var animals = [new Tiger(), new Panda(), new Elephant()];
var names = ["Peter", "Tom", "Allison", "Chad", "Timmy", "Oscar", "Ted"];

function getRandomIndex(maxIndex) {
	return Math.floor(Math.random()*maxIndex);
}

function generateRandomName() {
	var i = getRandomIndex(names.length);
	return names[i];
}

function generateRandomAge() {
	var i = getRandomIndex(10);
	return i;
}

function generateRandomAnimal() {
	var i = getRandomIndex(animals.length);
	var randomAnimal = animals[i];

	if (randomAnimal instanceof Tiger) {
		return new Tiger(generateRandomName(), generateRandomAge());
	}
	else if (randomAnimal instanceof Panda) {
		return new Panda(generateRandomName(), generateRandomAge());
	}
	else if (randomAnimal instanceof Elephant) {
		return new Elephant(generateRandomName(), generateRandomAge());
	}
}

$(document).ready(function() {
	var animal = JSON.parse(localStorage.getItem("savedAnimal"));
	var hasSavedAnimal = false;
	if (animal === null)
	{
		$("#button-storage").text("Save Animal");
		animal = generateRandomAnimal();
	}
	else
	{
		$("#button-storage").text("Clear Animal");
		hasSavedAnimal = true;
	}

	$("#name-age").text(animal.name + " " + animal.age + " years old");
	$("#animal-image").attr("src", animal.image);

	$("#button-storage").click(function() {
		if (hasSavedAnimal)
		{
			localStorage.removeItem("savedAnimal");

			$("#button-storage").css("display", "none");
			$("#button-action-text").text("Cleared!");
			$("#button-action-text").css("display", "block");
		}
		else {
			localStorage.setItem("savedAnimal", JSON.stringify(animal));

			$("#button-storage").css("display", "none");
			$("#button-action-text").text("Saved!");
			$("#button-action-text").css("display", "block");
		}
	});

});

