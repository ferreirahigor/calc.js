export default function calculate () {
    const resultInput = document.querySelector('#result')
    //sempre executar essas linhaspor padrao
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    console.log ('calculate')
//logo ele vai calcular os resultados
    const result = eval(input.value)

    resultInput.value = result
    resultInput.classList.remove ('error')
}