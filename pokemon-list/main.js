const xhr = new XMLHttpRequest()

        // METHOD     URL             ASYNC???
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
          const JSONdata = xhr.responseText
          const data = JSON.parse(JSONdata)
          display(data.objects[0].pokemon)
        console.log()
        }

    }

function display(pokemon){
    for(let i = 0; i < pokemon.length; i++){
    const h1 = document.createElement("h1")
    h1.textContent = pokemon[i].name
    document.body.appendChild(h1)
    }
}

