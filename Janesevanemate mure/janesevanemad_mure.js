const arvuta = () => {
    let ringid = document.getElementById("ringid").value;
    let arv = 0;
    let porgandid = 0;
    while (ringid >= arv) {
        if (arv % 2 === 0) {
            porgandid+=arv;
        }
        arv++;
    }
    document.getElementById("tulemus").innerHTML = `Porgandite koguarv on: ${porgandid}`;
}