const init = () => {
	const weekLeft = document.querySelector('#weekLeft');
	const weekRight = document.querySelector('#weekRight');

	weekLeft.addEventListener('click', weekLeftClick);
	weekRight.addEventListener('click', weekRightClick);
}

const weekLeftClick = (e) => {
	const weekStart = document.querySelector('#weekStart');
	const weekEnd = document.querySelector('#weekEnd');
}

const weekRightClick = (e) => {
	const weekStart = document.querySelector('#weekStart');
	const weekEnd = document.querySelector('#weekEnd');
}

init();