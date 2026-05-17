let words = ['allveelaev', 'sügavas', 'käis', 'linnud', 'vees', 'kollane']
document.getElementById('järjend').innerHTML = `<h3>Järjend on: ${words}</h3>`

const sona_eemaldaja = () => {
    let new_words = words.filter(word => word !== document.getElementById('sona').value);
    document.getElementById('tulemus').innerHTML = `<h3>Tulemus on: ${new_words}</h3>`
} 