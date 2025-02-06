import Splide from "@splidejs/splide"

export const initHeroCarousel = () => {
    const heroCarousel = document.querySelector(".hero-slider")
    const heroCarouselPrev = document.querySelector(".splide__arrow--prev")
    const heroCarouselNext = document.querySelector(".splide__arrow--next")
    if (heroCarousel) {
        const splide = new Splide(heroCarousel, {
            type: "slide",
            drag: false,
            perPage: 1,
            gap: "2em",
            arrows: false,
            pagination: false,
            autoWidth: false,
            speed: 1000,
            easing: "linear",
        })
        splide.mount()
        heroCarouselNext.addEventListener("click", (e) => {
            splide.go("+1")
        })
        heroCarouselPrev.addEventListener("click", (e) => {
            splide.go("-1")
        })
    }
}
