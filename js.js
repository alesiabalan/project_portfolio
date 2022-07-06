const portfolioBtns = document.querySelector('.portfolio_button_menu');
const portfolioImages = document.querySelectorAll('.portfolio_pic');

portfolioBtns.addEventListener('click', updatePortfolioSection);

function updatePortfolioSection(event) {
    if (event.target.classList.contains('portfolio_button')) {
        const activeBtn = document.querySelector('.btn_active');
        const pressedBtn = event.target;
        activeBtn.classList.remove('btn_active');
        pressedBtn.classList.add('btn_active');
        let season = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(elem => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${elem}/${i}.jpg`;
        }
    });
}

preloadImages();

