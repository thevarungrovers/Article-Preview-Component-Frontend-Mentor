var share = document.querySelector('.share');
var content = document.querySelector('.hidden-content');

share.addEventListener('click', () => {
    content.classList.remove('visually-hidden');
})

