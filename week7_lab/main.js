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
var names = ["Peter", "Tom", "Allison", "Chad", "Timmy", "Oscar"];

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
	var animal = generateRandomAnimal();
	// fill in code
	$("#name-age").text(animal.name + " " + animal.age + " years old");
	$("#animal-image").attr("src", animal.image);
});