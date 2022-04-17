
var cartList = [];

order1 = {
	'detail' : 'Laptop',
	'price' : '1200$'
}
order2 = {
	'detail' : 'Data',
	'price' : '100$'
}
order3 = {
	'detail' : 'Data',
	'price' : '300$'
}


function func1() {
	cartList.push(order1);
}
func1();
function func2() {
	cartList.push(order2);
}
func2();
function func3() {
	cartList.push(order3);
}
func3();


var div = document.getElementById('table');


function addToList() {
	for (i=0; i<3; i++) {

		var ul = document.createElement('ul');
		ul.classList.add('container');

		var li = document.createElement('li');
		var h5 = document.createElement('h5');
		li.appendChild(h5);
		h5.appendChild(document.createTextNode(cartList[i].detail));
		ul.appendChild(li);
		li.classList.add('li1');

		var li = document.createElement('li');
		var h5 = document.createElement('h5');
		li.appendChild(h5);
		h5.appendChild(document.createTextNode(cartList[i].price));
		ul.appendChild(li);
		li.classList.add('li2')

		var li = document.createElement('li');
		var h5 = document.createElement('h5');
		li.appendChild(h5);
		h5.appendChild(document.createTextNode('Available'));
		ul.appendChild(li);
		li.classList.add('li3');

		var li = document.createElement('li');
		var button = document.createElement('button');
		button.innerHTML = 'حذف';
		button.classList.add('delButtStyle');
		li.appendChild(button);
		ul.appendChild(li)
		li.classList.add('li4');

		div.appendChild(ul);

	}
}

addToList();

var container = document.querySelector('#table');

container.addEventListener('click', function(dell) {
	if (dell.target.classList.contains('delButtStyle')) {
		dell.target.parentElement.parentElement.remove();
	
	}
});

