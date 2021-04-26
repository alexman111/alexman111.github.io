window.onload = () => {
    const url = new URL(window.location.href)
    const scope = url.searchParams.get('scope')
    document.getElementById("main").innerHTML = `
    <p class="center__text">Your scope for quiz is: ${scope}.We hope you enjoyed our quiz.</p>
    `
}