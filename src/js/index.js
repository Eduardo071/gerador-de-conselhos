async function gerarDicaAleatoria(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function usarUmaDica(){
    const dicas = await gerarDicaAleatoria()
    const dica = await gerarDicaAleatoria(dicas.slip.advice)
    const textoDica = dicas.slip.advice
    let texto = document.getElementById("dica")
    texto.innerText = textoDica
    
}

let botao = document.querySelector('.botao')
let numeroDica = document.querySelector('.nome')

let contador = 0



botao.addEventListener('click', () => {
    contador++
    usarUmaDica()
    numeroDica.innerHTML = "Dica #" + contador
})



 
 
