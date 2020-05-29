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

	// 주소 클릭 할 때 주소 복사 기능 넣기 
}

const scrollEvent = () => {
	// 스크롤 어느 위치 내려가면 nav, search, cate는 고정으로 보여주기
	// 맨 상단으로 올라오면 다시 shop 정보도 보이기
	// 
	// 스크롤 위치에 따라서 해당 카테고리 선택해주기
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