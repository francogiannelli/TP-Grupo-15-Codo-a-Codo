const url = 'https://pokeapi.co/api/v2/pokemon/58/'

fetch(url)
.then(response => response.json() )
.then(data => {

    let element = document.getElementById('elem')
    element.innerHTML = `
        <p style="text-align:center;">&#128512Nombre pokemon: <b>${data.name}</b></p>
        <p style="text-align:center;">&#127380Nro. Lista: <b>${data.order}</b></p>
        <center><img alt="Foto pokemon" src='${data.sprites.front_default}' width="150" height="150" align="center"/></center>
        `;

    console.log(data)
})
.catch(err=>console.log(err))