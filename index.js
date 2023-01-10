const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// impedindo que o usuário vá digitar letra
// criar um array para as teclas permitidas

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})
//add a tecla clear a funcionar
document.getElementById ('clear').addEventListener('click', function (){
    input.value = ''
    // esse método focus ele vai focar no nosso input, vai colocar o cursor
    input.focus ()

})
// adicionar um evento ao input
input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    //add backspace
    if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
    }

//add tecla enter
    if(ev.key === 'Enter') {
        calculate ()
    }
})

// add funcionalidade ao sinal de =
document.getElementById('equal').addEventListener('click', calculate)


function calculate () {
    //sempre executar essas linhaspor padrao
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
//logo ele vai calcular os resultados
    const result = eval(input.value)

    resultInput.value = result
    resultInput.classList.remove ('error')
}

//botao de copiar para area de transferencia
document.getElementById('copyToClipboard').addEventListener('click', function (ev){
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

//trocando o tema de cor
document.getElementById('themeSwitcher').addEventListener('click', function (){
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }



})
