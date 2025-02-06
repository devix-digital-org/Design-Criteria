export const updateQuantity = () => {
    document.querySelectorAll(".qty-minus, .qty-plus").forEach((button) => {
        button.addEventListener("click", function () {
            let container = this.closest("[data-product-id]") || this.closest(".update-quantity")
            if (!container) return

            let input = container.querySelector("input[type='number']")
            if (!input) return

            let quantity = parseInt(input.value) || 1

            if (this.classList.contains("qty-minus")) quantity = Math.max(1, quantity - 1)
            if (this.classList.contains("qty-plus")) quantity++

            input.value = quantity
        })
    })
}
