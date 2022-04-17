   

var mailList = [];

var newsButt = document.getElementById('mailButt');
var newsMailInput = document.getElementById('newsMail');

newsButt.addEventListener('click', function() {
	mailList.push(newsMailInput.value);
	newsMailInput.value='Added';
	setInterval(function () {
		newsMailInput.value='';
	}, 2000);
});


var cartList = [];
var bodyBtn = document.querySelectorAll('.bodyBtn');
var counter = 1;
var cartCounter = document.getElementById('cartNum');

bodyBtn.forEach((button) => {
	button.addEventListener('click', funcc )
});

function funcc() {
	cartList.push(bodyBtn.value);
	var counter = cartList.length;
	cartCounter.innerHTML = counter;
};
