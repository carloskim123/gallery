const imgWrapper = document.getElementById('images');
const inputEl = document.getElementById('input-el');
const searchBtn = document.getElementById('search-btn');

const api_key = 'qtt58nMOITSBW7FeoVnHIvrXaNG1k4gmmJCNk6To3v4vSUTfwhR9lvpx';
const per_page = 15;

const generate_html = (images) => {
  imgWrapper.innerHTML = images
    .map(
      (image) =>
        `<div class="card" style="background:url(${image.src.large2x}); background-size:cover; background-position:center;">
      <div class="details">
      <button><img src='https://www.svgrepo.com/show/510957/download.svg'/></button>
      </div>
    </div>`
    )
    .join('');
};

const loadImages = (api_url) => {
  fetch(api_url, {
    headers: { Authorization: api_key },
  })
    .then((res) => res.json())
    .then((data) => {
      generate_html(data.photos);
      console.log(data)
    });
};


let url = `https://api.pexels.com/v1/curated?&per_page=9`;

loadImages(url);




