const main = document.getElementById("main")
console.log(main)

fetch("https://rickandmortyapi.com/api/character") // traigo la info
.then(respuesta => respuesta.json()) // y entonces hago esto
.then(data => {
    
    const array = data.results        
    let acc = ""
    for(let i = 0; i < array.length; i++){
        acc = acc + `
        <div class="tarjeta">
            <div class="container-img">
                <img src=${array[i].image} alt=${array[i].name}>    
            </div>
            <div class="info">
                <p>
                    ${array[i].name}
                </p>
                <p>
                    ${array[i].gender}
                </p>
                <p>
                    ${array[i].species}
                </p>
                <p>
                    ${array[i].status}
                </p>
            </div>
        </div>
        `        
    }

    main.innerHTML = acc
}) 