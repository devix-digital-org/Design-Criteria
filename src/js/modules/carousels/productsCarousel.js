import Splide from "@splidejs/splide"

export const initProductsCarousel = () => {
    const mainCarousel = document.querySelector("#main-carousel")
    const thumbnailCarousel = document.querySelector("#thumbnail-carousel")
    const modalMainCarousel = document.querySelector("#modal-carousel-main")
    const modalThumbnailCarousel = document.querySelector("#modal-carousel-thumbnail")
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

    const initSplide = (main, thumb, optionsMain = {}, optionsThumb = {}) => {
        const mainSplide = new Splide(main, {
            type: "fade",
            rewind: true,
            pagination: false,
            arrows: false,
            ...optionsMain,
        })
        const thumbSplide = new Splide(thumb, {
            arrows: true,
            gap: 16,
            rewind: true,
            pagination: false,
            isNavigation: true,
            ...optionsThumb,
        })
        mainSplide.sync(thumbSplide)
        mainSplide.mount()
        thumbSplide.mount()
        return mainSplide
    }

    cloneSlides(mainCarouselList, thumbnailCarouselList)
    const mainSplide = initSplide(mainCarousel, thumbnailCarousel)

    if (modalMainCarousel && modalThumbnailCarousel) {
        const modalMainCarouselList = modalMainCarousel.querySelector(".splide__list")
        const modalThumbnailCarouselList = modalThumbnailCarousel.querySelector(".splide__list")

        cloneSlides(mainCarouselList, modalMainCarouselList)
        cloneSlides(mainCarouselList, modalThumbnailCarouselList)

        const modalSplide = initSplide(
            modalMainCarousel,
            modalThumbnailCarousel,
            { arrows: true },
            {
                direction: "ttb",
                height: "auto",
                wheel: true,
                releaseWheel: true,
            }
        )

        document.querySelectorAll("[data-modal-open='#carousel-modal']").forEach((slide, index) => {
            slide.addEventListener("click", () => {
                setTimeout(() => {
                    modalSplide.go(index)
                }, 0)
            })
        })
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
