const sections = document.querySelectorAll('.main-content__subsection');
const sectionsToShow = [];

for (let i = 0; i < 6; i++) {
    sectionsToShow.push(sections[i])
}

function renderCards() {
    const mainSection = document.querySelector('.main-content__section');
    mainSection.innerHTML = '';
    
    for (let i = 0; i < sectionsToShow.length; ++i) {
        mainSection.append(sectionsToShow[i])
    }
}

if (window.innerWidth <= 390) {
    renderCards();
}


function showMore() {
    const showMore = document.querySelector('.subsection__show-more');
    const currIndex = sectionsToShow.length;

    showMore.onclick = () => {
        if (sections.length !== sectionsToShow.length) {
            for (let i = currIndex; i < sections.length; i++) {
                sectionsToShow.push(sections[i])
            }
            renderCards();
        }
    }
}

showMore();