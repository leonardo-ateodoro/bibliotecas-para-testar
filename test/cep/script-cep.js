const inputCep = document.querySelector('.container__input');
const botaoThen = document.querySelector('#btn-then');
const botaoAsync = document.querySelector('#btn-async');

const URL_BASE = 'https://viacep.com.br/ws';

function obterCep() {
    return inputCep.value.trim();
}

botaoThen.addEventListener('click', () => {
    const cep = obterCep();
    fetch(`${URL_BASE}/${cep}/json/`)
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error('Erro na requisição'); 
            }
            return resposta.json();
            })

            .then((dados) => {
                console.log('Resultado com .then():');
                console.log(dados);
    
            })
            .catch((erro) => {
                console.error('Erro:', erro.message);
            }); 
} );

botaoAsync.addEventListener('click', async () => {
    const cep = obterCep();

    try {
        const resposta = await fetch (`${URL_BASE}/${cep}/json/`);
        if (!resposta.ok) {
            throw new Error ('Erro na requisição');

        }

        const dados = await resposta.json(); 

        console.log('Resultado com async/await:');
        console.log(dados);
    } catch (erro) {
        console.error('Erro:', erro.message);
    }
});

