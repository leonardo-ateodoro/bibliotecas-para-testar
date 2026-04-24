import { iniciarMenu } from '../components/menu.js';
/**
 * Carrega HTML via fetch e injeta no container
 */
const carregarComponente = async (caminho, container) => {
    try {
        const resposta = await fetch (caminho); 
        if (!resposta.ok) {
            throw new Error ('Erro ao carregar componente');
        }

    /** Converte para texto */
    const html = await resposta.text();

    /** Injeta no DOM */
    container.innerHTML = html;
    } catch (erro)  {
        console.error (erro); 

    } 
};

 
/**
 * Controla navegação SPA
 */
const iniciarLinks = () => {
    const conteudo = document.querySelector('[data-conteudo]');
    document.querySelectorAll('[data-link]').forEach((link) => {
        link.addEventListener('click, async (r') 
/** FECHA O MENU AO CLICAR */
     

 /** Carrega nova página */
    


/**
 * Inicialização geral da aplicação
 */

  /** Injetar menu */


  /** Ativar comportamento do menu */


  /** Ativar navegação SPA */


  /** Carrega página inicial */


