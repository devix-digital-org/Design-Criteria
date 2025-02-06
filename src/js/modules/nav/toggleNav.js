import Tween from "gsap"
export const initMobileNavigation = () => {
    const burger = document.querySelector(".burger")
    const header = document.querySelector(".header")
    const headerSearchBlock = document.querySelector(".header-search")
    if (burger) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("active")
            header.classList.toggle("active")
            header.classList.remove("active-search")
            headerSearchBlock.classList.remove("is-active")
        })
    }
}
export const migrateMobileNavigation = () => {
    const burger = document.querySelector(".burger")
    const header = document.querySelector(".header")
    const linkNavParent = document.querySelector(".menu-item-has-children")
    if (linkNavParent) {
        linkNavParent.classList.remove("active")
    }
    burger.classList.remove("active")
    header.classList.remove("active")
}
export const initMobileSubNav = () => {
    const linkNav = document.querySelector(".menu-item-has-children p")
    const linkNavParent = document.querySelector(".menu-item-has-children")
    if (linkNav) {
        linkNav.addEventListener("click", () => {
            linkNavParent.classList.toggle("active")
        })
    }
}
