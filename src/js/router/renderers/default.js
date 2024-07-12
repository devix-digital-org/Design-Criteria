import Highway from "@dogstudio/highway"
import { loadContent } from "../../common/loadContent.js"
import { initAccordion, initAccordionCore } from "../../modules/accordion/initAccordion.js"
import { initHeroCarousel } from "../../modules/carousels/heroCarousel.js"
import { initBlogNav } from "../../modules/blog/initBlogNav.js"
import { initShare } from "../../modules/blog/initShare.js"
import { scrollTo } from "../../common/scrollTo.js"
import { initModal, initModalSearch } from "../../modules/modal/initModal.js"
import { chooseHeaderColor } from "../../common/headerColor.js"
import { currentDate } from "../../common/currentDate.js"
import { runPaypalScript } from "../../common/runPaypal.js"

class DefaultRenderer extends Highway.Renderer {
    onEnter() {
        initAccordion()
        initBlogNav()
        initShare()
        initHeroCarousel()
        initModalSearch()
        currentDate()
        runPaypalScript()
    }
    onEnterCompleted() {
        loadContent()
        initModal()
        chooseHeaderColor()
        scrollTo()
        initAccordionCore()
    }
}

export default DefaultRenderer
