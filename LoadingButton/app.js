const searchButton =  document.querySelector('#search-button');
const searchButtonContent = document.querySelector('#search-button div');


const toggleButton = () => {
    searchButtonContent.classList.toggle('loading');
}

searchButton.addEventListener('click', toggleButton);

