const vigased = ['alkohool', 'grematoorium', 'kanditaat']
const õiged = ['alkohol', 'krematoorium', 'kandidaat']
let tekst = 'Oleks hea, kui alkohool ei satuks teismeliste kätte. Võrru rajatakse grematoorium riigi kulul. Jaan oli parim kanditaat peaministriks.'
document.getElementById("vigane").innerHTML = tekst
const parandaKirjaviga = () => {
    tekst = tekst.split(" ")
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < tekst.length; j++) {
            if (tekst[j] === vigased[i]) {
                tekst[j] = õiged[i]
            }
        }
    }
    tekst = tekst.join(" ")
    document.getElementById("korrektne").innerHTML = tekst
}