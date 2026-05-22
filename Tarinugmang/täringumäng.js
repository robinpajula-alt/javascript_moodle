

function tee_järjend() {
    let visked = []
    let viske_num = document.getElementById("täring").value
    for (let i = 0; i < viske_num; i++) {
        visked.push(Math.floor(Math.random() * 6) + 1)
    }
    document.getElementById("tulemus").innerHTML = `${visked}`
}