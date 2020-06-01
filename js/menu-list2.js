let gScrollFixedFlag = 0;
let gMenuOffsetTop = new Map();
const cateAll = document.querySelectorAll('.cate li');

const init = () => {
	// Search TextBox Click Event
	const txtSearch = document.getElementById('txtSearch');
	const btnSearch = document.getElementById('btnSearch');
	const btnDeleteAll = document.getElementById('btnDeleteAll');
	const btnCancel = document.getElementById('btnCancel');
	const btnAddCart = document.querySelectorAll('input[name="cart"]');

	txtSearch.addEventListener('click', searchHistory);
	btnSearch.addEventListener('click', searchClick);
	btnDeleteAll.addEventListener('click', searchDeleteAll);
	btnCancel.addEventListener('click', searchPopClose);
	// btnAddCart.addEventListener('click', addCart);

	[].forEach.call(btnAddCart, function(e) { 
		e.addEventListener("click", addCart, false); 
	});


	const menuTitle = document.querySelectorAll('.menu h3');
	let sumHeight = 0;
	[].forEach.call(menuTitle, function(e) {
		// console.dir(e.dataset.cateNumber);
		// console.dir(e);
		gMenuOffsetTop.set(e.dataset.cateNumber*1, sumHeight);
		sumHeight += e.nextElementSibling.offsetHeight + 50;
		// console.log(e.nextElementSibling.offsetHeight, " sumHeight => ", sumHeight);

	});

	window.addEventListener('scroll', scrollEvent);
	// 주소 클릭 할 때 주소 복사 기능 넣기 
}

const scrollEvent = (e) => {
	const currentScroll = Math.round(e.target.scrollingElement.scrollTop);
	if(currentScroll > 140 && gScrollFixedFlag === 0) {
		// 스크롤 이벤트는 자주 일어나므로, 최대한 지역변수로 진행
		const navScrollFixed = document.querySelector('.nav');
		const cateScrollFixed = document.querySelector('.cate');
		const menuScrollFixed = document.querySelector('.menu');

		navScrollFixed.classList.add('nav-scroll-fixed');
		cateScrollFixed.classList.add('cate-scroll-fixed');
		menuScrollFixed.classList.add('menu-scroll-fixed');

		gScrollFixedFlag = 1;
	} else if(currentScroll <= 140 && gScrollFixedFlag === 1) {
		const navScrollFixed = document.querySelector('.nav');
		const cateScrollFixed = document.querySelector('.cate');
		const menuScrollFixed = document.querySelector('.menu');

		navScrollFixed.classList.remove('nav-scroll-fixed');
		cateScrollFixed.classList.remove('cate-scroll-fixed');
		menuScrollFixed.classList.remove('menu-scroll-fixed');

		gScrollFixedFlag = 0;
	}
	// 스크롤 위치에 따라서 해당 카테고리 선택해주기
	
	// const menuTitle = document.querySelectorAll('.menu h3');
	// const cateAll = document.querySelectorAll('.cate li');
	// // 메뉴 타이틀의 offsetTop 이 현재 스크롤 넘으면 메뉴 타이틀의 data-cate의 넘버랑 cata data-cate의 넘버랑 같으면 select 해주기
	// [].forEach.call(cateAll, function(e) {
	// 	console.dir(e);
	// });
	// 
	let selectCate = 0;
	for(let i=0; i<gMenuOffsetTop.size; i++) {
		cateAll[i].classList.remove('cate-selected');
		if(currentScroll > gMenuOffsetTop.get(i+1)) {
			selectCate = i;
			// console.log(i, ' 현재 위치--> ', currentScroll, ' H3 태그의 위치', gMenuOffsetTop.get(i+1));
		}
	}


	// const documentHeight = document.scrollingElement.offsetHeight;
	const scrollHeight = document.scrollingElement.scrollHeight;
	const windowHeight = document.scrollingElement.clientHeight;

	if ((scrollHeight - windowHeight) <= currentScroll) {
		// 맨 하단이면 맨 마지막 카테고리에 주기 
		cateAll[gMenuOffsetTop.size-1].classList.add('cate-selected');
	} else {
		// 그게 아니면
		cateAll[selectCate].classList.add('cate-selected');
	}
}

const searchHistory = (e) => {
	// 검색 창 기존 검색 했던 리스트 보이기 - 리스트 하나도 없으면 최근 검색 리스트가 없다고 안내 문구 띄우는게 나을듯.
	// 리스트 중 하나 클릭하면 그 문구 검색하기 (검색으로 이동)
	
	const recentlyHistory = document.getElementById('recentlyHistory');
	const btnCartCount = document.getElementById('btnCartCount');
	const body = document.getElementsByTagName('body')[0];

	recentlyHistory.classList.remove('hide');
	btnCartCount.classList.add('search-mode');
	body.classList.add('scrollLock');
}


// 문구와 함께 검색 페이지로 이동
const searchClick = () => {
	
}


// 최근 검색어 다 지우기
const searchDeleteAll = () => {
	
}


// 최근 검색어 닫기
const searchPopClose = () => {
	const recentlyHistory = document.getElementById('recentlyHistory');
	const body = document.getElementsByTagName('body')[0];

	recentlyHistory.classList.add('hide');
	body.classList.remove('scrollLock');
}


const addCart = (e) => {
	// 장바구니에 담으면 특정 동작을 해서 담긴 것처럼 하기 
	e.target.classList.remove('cartwink');
	e.target.offsetWidth;
	e.target.classList.add('cartwink');
}

init();