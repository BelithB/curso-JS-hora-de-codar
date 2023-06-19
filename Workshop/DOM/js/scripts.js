// selecionar elementos
const title = document.getElementById("title") //title selecionando por id
console.log(title)

const sameTitle = document.querySelector("#title") //metodo mais pratico de seleção
console.log(sameTitle)

const texts = document.querySelectorAll(".text")
console.log(texts)
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

//manipulação de elementos 
title.textContent = "Mudei o texto"

texts[0].innerHTML = "<span> Alteramos o HTML deste elemento</span>"

texts[1].style.backgroundColor = "red" 

texts[2].classList.add("my-class")

texts[2].classList.remove("text")

texts[3].remove()

//eventos
const btn = document.querySelector("#btn")

btn.addEventListener("click", function () { 
    texts[2].style.color = "blue"
})