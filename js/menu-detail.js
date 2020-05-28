const init = () => {
	const minus = document.getElementById('minus');
	const plus = document.getElementById('plus');

	minus.addEventListener('click', minusClick);
	plus.addEventListener('click', plusClick);
}

const minusClick = () => {
	const qtyEl = document.getElementById('qty');

	if(qty.innerText > 1) {
		qty.innerText = qty.innerText - 1;
	}
}

const plusClick = () => {
	const qtyEl = document.getElementById('qty');

	qty.innerText = qty.innerText*1 + 1;
}

init();