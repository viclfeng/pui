// JavaScript Document
var products = [];
var quantity = [];
var glaze = [];


function addQty(quantityOfItem) {
	products.push('PUMPKIN SPICE CINNAMON ROLL');
	quantity.push(quantityOfItem);
	console.log(quantity[0]);
	console.log(products[0]);
}

function addGlaze(glazeOption) {
	glaze.push(glazeOption);
	console.log(glaze[0]);
}

function delElement(i) {
	var names = stringToArray(localStorage.getItem("savedBuns"));
	var qtys = stringToArray(localStorage.getItem("savedQty"));
	var glazes = stringToArray(localStorage.getItem("savedGlaze"));

	console.log('***********');
	console.log(names);

	names.splice(i, 1);
	qtys.splice(i, 1);
	glazes.splice(i, 1);

	localStorage.setItem("savedBuns", JSON.stringify(names));
	localStorage.setItem("savedQty", JSON.stringify(qtys));
	localStorage.setItem("savedGlaze", JSON.stringify(glazes));
}

function stringToArray(str) {
	var str1 = str.slice(1,-1);
	var arr = str1.split(",");
	var finalArr = [];

	for (i=0; i<arr.length; i++) {
		if (arr[i].length>2){
			arr[i] = arr[i].slice(1,-1);
		} else {
			arr[i] = arr[i];
		}
	}
	return arr;
}

$(document).ready(function() {

	var pname = JSON.parse(localStorage.getItem("savedBuns"));
	var pqty = JSON.parse(localStorage.getItem("savedQty"));
	var pglazeoptions = JSON.parse(localStorage.getItem("savedGlaze"));
	var cartItems = pname.length;

	var getName = stringToArray(localStorage.getItem("savedBuns"));
	var getQty = stringToArray(localStorage.getItem("savedQty"));
	var getGlaze = stringToArray(localStorage.getItem("savedGlaze"));

	console.log(getName);
	console.log(getQty);
	console.log(getGlaze);

	displayCart(getName, getQty, getGlaze);

	if (document.getElementById('cart-button') != null) {
		document.getElementById('cart-button').innerHTML = "CART (" + cartItems + " items)"
	}

	$("#buy").click(function() {
		console.log('buy');
		if (products.length == 1) {
			pname = [products[0]];
			pqty = [quantity[0]];
			pglazeoptions = [glaze[0]];
		}
		else {
			pname.push(products[products.length - 1]);
			pqty.push(quantity[quantity.length - 1]);
			pglazeoptions.push(glaze[glaze.length - 1]);
		}
		localStorage.setItem("savedBuns", JSON.stringify(pname));
		localStorage.setItem("savedQty", JSON.stringify(pqty));
		localStorage.setItem("savedGlaze", JSON.stringify(pglazeoptions))
	});

	function displayCart(name, qty, glaze) {
		var cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Glaze</th><th>Price</th></tr>';
		var total = 0;

		for (i=0; i<name.length; i++) {
			console.log(i);
			total += qty[i]*5;
			cartdata += "<tr><td>" + name[i] + "</td><td>" + qty[i] + "</td><td>" + glaze[i] + "</td><td>$" + (qty[i]*5) + "</td><td><button onclick='delElement(" + i +")'>X</button></td></tr>";
		}

		cartdata += '<tr><td></td><td></td><th>TOTAL</th><th>$' + total + '</th></tr>';

		console.log(typeof cartdata);

		if (document.getElementById('cart') != null) {
			document.getElementById('cart').innerHTML = cartdata;
			document.getElementById('cart-title').innerHTML = "YOUR CART (" + cartItems + " items)";
		}
	}
});