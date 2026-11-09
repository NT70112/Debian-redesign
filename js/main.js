
$(function () {
    $(".Accordion-iteam").on("click", function () {
        $(this).find(".Accordion-iteam__decription").slideToggle();
    });
    $(".Accordion-iteam").on("click", function () {
        $(this).find("svg").toggleClass("arrow-icon--active");
    });
    $(".news__tab").on("click", function () {
        $(".news__tab").removeClass("news__tab--active");
        $(this).toggleClass("news__tab--active");
    });
    $("#update-button").on("click", function () {
        index = 0;
        $("#release").addClass("invisible");
        updateSlider();
    });
    $("#all-button").on("click", function () {
        index = 0;
        $("#release").removeClass("invisible");
        updateSlider();
    });
});


const cardTrack = document.querySelector('.news__track')
const arrowRight = document.querySelector('.news__arrow--right')
const arrowLeft = document.querySelector('.news__arrow--left')
const viewport = cardTrack.parentElement
const pagination = document.querySelector('.news__pagination')
let index = 0

function updateSlider() {
    const cards = [...cardTrack.querySelectorAll('.news__card')]
        .filter(card => !card.classList.contains('invisible'))
    if (cards.length === 0) {
        pagination.replaceChildren()
        cardTrack.style.transform = ''
        arrowRight.classList.add('not-active')
        arrowLeft.classList.add('not-active')
        return
    }

    const firstCard = cards[0]
    const lastCard = cards[cards.length - 1]
    const cardGap = parseFloat(getComputedStyle(cardTrack).columnGap) || 0
    const cardsPerPage = Math.max(
        1,
        Math.floor((viewport.clientWidth + cardGap) / (firstCard.offsetWidth + cardGap))
    )
    const pageCount = Math.ceil(cards.length / cardsPerPage)
    index = Math.min(index, pageCount - 1)

    pagination.replaceChildren(...Array.from({ length: pageCount }, (_, pageIndex) => {
        const dot = document.createElement('span')
        dot.classList.add('news__dot')
        if (pageIndex === index) {
            dot.classList.add('news__dot--active')
        }
        return dot
    }))

    const maxOffset = Math.max(
        0,
        lastCard.offsetLeft - firstCard.offsetLeft
        + lastCard.offsetWidth - viewport.clientWidth
    )
    const currentCard = cards[Math.min(index * cardsPerPage, cards.length - 1)]
    const cardOffset = currentCard.offsetLeft - firstCard.offsetLeft
    const offset = Math.min(cardOffset, maxOffset)

    pagination.querySelector('.news__dot--active')?.classList.remove('news__dot--active')
    pagination.children[index]?.classList.add('news__dot--active')
    arrowRight.classList.toggle('not-active', index >= pageCount - 1)
    arrowLeft.classList.toggle('not-active', offset <= 0);
    cardTrack.style.transform = `translateX(-${offset}px)`

}
updateSlider()

document.addEventListener('click', (event) => {
    const arrowRight = event.target.closest('.news__arrow--right')
    const arrowLeft = event.target.closest('.news__arrow--left')
    const cards = [...cardTrack.querySelectorAll('.news__card')]
        .filter(card => !card.classList.contains('invisible'))
    const cardGap = parseFloat(getComputedStyle(cardTrack).columnGap) || 0
    const firstCard = cards[0]
    const cardsPerPage = firstCard
        ? Math.max(1, Math.floor((viewport.clientWidth + cardGap) / (firstCard.offsetWidth + cardGap)))
        : 1
    const pageCount = Math.ceil(cards.length / cardsPerPage)

    if (arrowRight && index < pageCount - 1) {
        index++
        updateSlider()
    } else if (arrowLeft && index > 0) {
        index--
        updateSlider()
    }
})

new MutationObserver(updateSlider).observe(cardTrack, { childList: true })
window.addEventListener('resize', updateSlider)
