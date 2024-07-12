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
    paypal
        .HostedButtons({
            hostedButtonId: "R3GNXRRXPVGRE",
        })
        .render("#paypal-container-R3GNXRRXPVGRE")
}

function loadScript(src, callback) {
    const script = document.createElement("script")
    script.src = src
    script.onload = callback
    document.head.appendChild(script)
}
