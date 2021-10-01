function f() {
    document.querySelectorAll('div[data-role="toast-container"],iframe').forEach(e => e.style.visibility = 'hidden')
    console.log(Array.from(document.querySelectorAll('div[data-role="toast-container"],iframe')).map(e => e.style.visibility))
}

window.setInterval(f, 1000)
