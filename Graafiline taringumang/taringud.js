const pildid = ["pildid/1.png", "pildid/2.png", "pildid/3.png", "pildid/4.png", "pildid/5.png", "pildid/6.png"]
const viskaTaring = () => {
    const tulemus = Math.floor(Math.random() * 6)
    document.getElementById("taring").src = pildid[tulemus]
}