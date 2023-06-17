const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');

const apiKey = 'qtt58nMOITSBW7FeoVnHIvrXaNG1k4gmmJCNk6To3v4vSUTfwhR9lvpx';
let page = 1;
// example request
// 
let inputData = '';

// const fetchImage = async () => {
// 	inputData = inputEl.value;
// 	const url = `https://api.pexels.com/v1/search?query=${inputData}&per_page=${page}`
// 	let request = await fetch(url);
// 	let response = await request.json();


// }

// async function getImg() {
// 	const response = await fetch(url, {
// 		headers: {
// 			'Authorization': 'qtt58nMOITSBW7FeoVnHIvrXaNG1k4gmmJCNk6To3v4vSUTfwhR9lvpx',
// 		},
// 	});

// 	const text = await response.json();

// 	console.log(text);
// }

// ////////////
async function searchImages() {
	inputData = inputEl.value;
	const url = `https://api.pexels.com/v1/search?query=${inputData}&per_page=${page}`
	

	const response = await fetch(url);
	const data = await response.json();

	const results = data.photos;


	searchResults.innerHTML = "";

	results.map((result) => {
		const imageWrapper = document.createElement('div');
		imageWrapper.classList.add('search-result');

		const image = document.createElement('img');
		image.src = result.url;

		const imageLink = document.createElement('a');
		imageLink.href = result.links.html;
		imageLink.target = "_blank";
		imageLink.textContent = result.alt_description;

		imageWrapper.appendChild(image)
		imageWrapper.appendChild(imageLink);
		searchResults.appendChild(imageWrapper);
		document.getElementById('show-more').style.display = "block"
	});

	page++;
}

formEl.addEventListener('click', (event) => {
	event.preventDefault();

	searchImages()
})