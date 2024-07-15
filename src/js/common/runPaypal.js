export function runPaypalScript() {
    if (typeof paypal === "undefined") {
        loadScript(
            "https://www.paypal.com/sdk/js?client-id=BAA3tOmpyJhjsgiAD5rqWccBJ5F4iUFV2CkpaGL-Pun0dpOEr9q5lsjoh0y_hfMwreTZmg0sIvWoolxi4U&components=hosted-buttons&enable-funding=venmo&currency=USD",
            () => {
                initializePaypal()
            }
        )
    } else {
        initializePaypal()
    }
}

function initializePaypal() {
    if (typeof paypal !== "undefined" && paypal.HostedButtons) {
        paypal
            .HostedButtons({
                hostedButtonId: "A88SZH49FWZXQ",
            })
            .render("#paypal-container-A88SZH49FWZXQ")
            .catch((err) => {
                console.error("Помилка при рендерингу PayPal кнопки:", err)
            })
    } else {
        console.error("PayPal HostedButtons не знайдено.")
    }
}

function loadScript(src, callback) {
    const script = document.createElement("script")
    script.src = src
    script.onload = callback
    script.onerror = () => {
        console.error("Не вдалося завантажити скрипт:", src)
    }
    document.head.appendChild(script)
}
