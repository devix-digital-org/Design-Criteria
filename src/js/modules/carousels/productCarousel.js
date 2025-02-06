import Splide from "@splidejs/splide"

export const initProductCarousel = () => {
    const mainCarousel = document.querySelector("#main-carousel")
    const thumbnailCarousel = document.querySelector("#thumbnail-carousel")
    const modalMainCarousel = document.querySelector("#modal-carousel-main")
    const modalThumbnailCarousel = document.querySelector("#modal-carousel")
    const fullscreenBtn = document.querySelector("#fullscreen-btn")

    if (!mainCarousel || !thumbnailCarousel) return

    const mainCarouselList = mainCarousel.querySelector(".splide__list")
    const thumbnailCarouselList = thumbnailCarousel.querySelector(".splide__list")

    const cloneSlides = (fromList, toList) => {
        if (!fromList || !toList) return
        toList.innerHTML = ""
        fromList.querySelectorAll(".splide__slide").forEach((slide) => {
            const clonedSlide = slide.cloneNode(true)
            clonedSlide.removeAttribute("data-modal-open")
            toList.appendChild(clonedSlide)
        })
    }

    const initSplide = (main, thumb) => {
        const mainSplide = new Splide(main, {
            type: "fade",
            rewind: true,
            pagination: false,
            arrows: false,
        })
        const thumbSplide = new Splide(thumb, {
            gap: 16,
            rewind: true,
            pagination: false,
            isNavigation: true,
        })
        mainSplide.sync(thumbSplide)
        mainSplide.mount()
        thumbSplide.mount()
    }

    cloneSlides(mainCarouselList, thumbnailCarouselList)
    initSplide(mainCarousel, thumbnailCarousel)

    if (modalMainCarousel && modalThumbnailCarousel) {
        const modalMainCarouselList = modalMainCarousel.querySelector(".splide__list")
        const modalThumbnailCarouselList = modalThumbnailCarousel.querySelector(".splide__list")

        cloneSlides(mainCarouselList, modalMainCarouselList)
        cloneSlides(mainCarouselList, modalThumbnailCarouselList)
        initSplide(modalMainCarousel, modalThumbnailCarousel)
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", () => {
            const modalImage = modalMainCarousel?.querySelector(".splide__slide.is-active img")
            if (modalImage) {
                if (modalImage.requestFullscreen) {
                    modalImage.requestFullscreen()
                } else if (modalImage.webkitRequestFullscreen) {
                    modalImage.webkitRequestFullscreen()
                } else if (modalImage.msRequestFullscreen) {
                    modalImage.msRequestFullscreen()
                }
            }
        })
    }
}
