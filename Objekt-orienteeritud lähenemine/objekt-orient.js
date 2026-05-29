
const kirjavead = {
    vigased: ['alkohool', 'grematoorium', 'kanditaat'],
    õiged: ['alkohol', 'krematoorium', 'kandidaat'],
    tekst: 'Oleks hea, kui alkohool ei satuks teismeliste kätte. Võrru rajatakse grematoorium riigi kulul. Jaan oli parim kanditaat peaministriks.',
    parandaKirjaviga () {
        this.vigased.map((vigane, i) => this.tekst = this.tekst.replace(vigane, this.õiged[i]))
        document.getElementById("korrektne").innerHTML = this.tekst
    },
    näitaTekst () {
        document.getElementById("vigane").innerHTML = this.tekst
    }
    
}
kirjavead.näitaTekst()