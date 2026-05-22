const vigased = ['alkohool', 'grematoorium', 'kanditaat']
const õiged = ['alkohol', 'krematoorium', 'kandidaat']
let tekst = 'Oleks hea, kui alkohool ei satuks teismeliste kätte. Võrru rajatakse grematoorium riigi kulul. Jaan oli parim kanditaat peaministriks.'
document.getElementById("vigane").innerHTML = tekst
const parandaKirjaviga = () => {
    vigased.map((vigane, i) => tekst = tekst.replace(vigane, õiged[i]))
    document.getElementById("korrektne").innerHTML = tekst
}