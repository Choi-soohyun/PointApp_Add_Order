const init = () => {
	const minusAll = document.querySelectorAll('.minus');
	const plusAll = document.querySelectorAll('.plus');
	const deleteAll = document.querySelectorAll('.delete');
	const dimOrderAll = document.querySelectorAll('.shop-order');
	const dimDeleteClose = document.querySelector('.dim-delete input[name=cancel]');
	const dimOrderClose = document.querySelector('.dim-order input[name=cancel]');

	[].forEach.call(minusAll, function(e) {
		e.addEventListener('click', minusClick, false);
	});

	[].forEach.call(plusAll, function(e) {
		e.addEventListener('click', plusClick, false);
	});

	[].forEach.call(deleteAll, function(e) {
		e.addEventListener('click', dimDeleteOpen, false);
	});

	[].forEach.call(dimOrderAll, function(e) {
		e.addEventListener('click', dimOrderOpen, false);
	});


	dimDeleteClose.addEventListener('click', dimDeleteCloseClick);
	dimOrderClose.addEventListener('click', dimOrderCloseClick);
}

const minusClick = (e) => {
	const parentEl = e.srcElement.parentElement;
	const txtQty = parentEl.getElementsByClassName('qty')[0];
	if(txtQty.innerText > 1) {
		txtQty.innerText = txtQty.innerText - 1;
	}
	qtyChange(parentEl, txtQty.innerText);
}

const plusClick = (e) => {
	const parentEl = e.srcElement.parentElement;
	const txtQty = parentEl.getElementsByClassName('qty')[0];
	txtQty.innerText = txtQty.innerText*1.0 +1;
	qtyChange(parentEl, txtQty.innerText);
}

const qtyChange = (parentEl, txtQty) => {
	const elPrice = parentEl.getElementsByClassName('price')[0];
	const elSum = parentEl.getElementsByClassName('sum')[0];

	const sumAll = parentEl.closest(".menu").querySelectorAll('.sum');
	const elTotal = parentEl.closest(".menu").getElementsByClassName('total')[0];
	let total = 0;

	elSum.innerText = elPrice.innerText * txtQty;

	[].forEach.call(sumAll, function(e) {
		total += (e.innerText*1.0);
	});

	elTotal.innerText = total;
}

const dimDeleteOpen = (e) => {
	const dimEl = document.querySelector('.dim-delete');
	dimEl.classList.remove('hide');

	console.log(e.srcElement.parentElement.closest('li').dataset.seq);
	// TODO 지우는 함수에 cart seq 넘기기
}

const dimDeleteCloseClick = () => {
	const dimEl = document.querySelector('.dim-delete');
	dimEl.classList.add('hide');
}

const dimOrderCloseClick = () => {
	const dimEl = document.querySelector('.dim-order');
	dimEl.classList.add('hide');
}

const dimOrderOpen = (e) => {
	console.log(e.srcElement.parentElement.closest('.menu').dataset.shopNumber);
	// TODO 주문하는 함수에 shop 정보 넘기기
	// 
	// TODO 주문이 완료되면, 완료 팝업창 띄우고 10초가 지나거나 ok누르면 , 주문 리스트로 이동
	const ordered = document.querySelector('.dim-ordered');
	ordered.classList.remove('hide');

	const orderedSecond = document.querySelector('.dim-ordered .ok');

	let countdown = 10;
	let countdownTimer = setInterval(function(e) {
		orderedSecond.innerText = countdown--;
		if(countdown <= 0) {
			clearInterval(countdownTimer);
			ordered.classList.add('hide'); // TODO 주문 리스트로 이동하는 걸로 바꾸기
		}
	}, 1000);
}


init();