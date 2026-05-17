
const pulss_arvuta = () => {
    let vanus = document.getElementById("vanus").value;
    let sugu = document.getElementById("sugu").value;
    let trenn_tüüp = document.getElementById("trenn_tüüp").value;

    let vähim_pulss = 0;
    let suurim_pulss = 0;
    let maxpulss = 0;
    
    if (sugu === "M" || sugu === "m") {
        maxpulss = 220 - vanus;
    }
    else if (sugu === "N" || sugu ==="n") {
        maxpulss = 206 - vanus * 0.88
    }
    if (trenn_tüüp === "1") {
        vähim_pulss = maxpulss * 0.5;
        suurim_pulss = maxpulss * 0.7;
    }
    else if (trenn_tüüp === "2") {
        vähim_pulss = maxpulss * 0.7;
        suurim_pulss = maxpulss * 0.8;
    }
    else if (trenn_tüüp === "3") {
        vähim_pulss = maxpulss * 0.8;
        suurim_pulss = maxpulss * 0.87;
    }
    vähim_pulss = Math.round(vähim_pulss);
    suurim_pulss = Math.round(suurim_pulss);

    document.getElementById('tulemus').innerHTML = `<h2>Teie minimaalne pulsisagdus on ${vähim_pulss} ja maksimaalne pulsisagedus on ${suurim_pulss}.</h2>`;}
