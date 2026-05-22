const jaga_õunad = () => {
    document.getElementById("tulemus_õun").innerHTML =""
    let poisid_arv = document.getElementById("poisid").value
    let õun_sum = 0
    for (let i = 0; i < poisid_arv; i++) {
        let õun_arv = Math.floor(Math.random() * 2) + 1
        õun_sum += õun_arv
        document.getElementById("tulemus_õun").innerHTML += `${õun_arv}<br>`
    }
    document.getElementById("tulemus_lumi").innerHTML = `Lumivalgekesele jäi ${14 - õun_sum}`
}