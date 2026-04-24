import { iniciarMenu } from '../components/menu.js';
/**
 * Carrega HTML via fetch e injeta no container
 */
const carregarComponente = async (caminho, container) => {
    try {
        const resposta = await fetch(caminho); 
        if (!resposta.ok) {
            throw new Error ('Erro ao carregar componente');
        }

    /** Converte para texto */
    const html = await resposta.text();

    /** Injeta no DOM */
    container.innerHTML = html;
}   catch (erro)  {
    console.error (erro); 

    } 
};

 
/**
 * Controla navegação SPA
 */ 
const iniciarLinks = () => {
    const conteudo = document.querySelector('[data-conteudo]');
    document.querySelectorAll('[data-link]').forEach((link) => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            const pagina = link.dataset.link; 
/** FECHA O MENU AO CLICAR */
            const menu = document.querySelector('[data-menu'); 
            const botao = menu.querySelector ('.menu__botao');

            if (menu.classList.contains('active')) {
            
                menu.classList.remove('active');
                
                botao.setAttribute('aria-expanded', false);
                botao.setAttribute('aria-label', 'Abrir Menu');

        }
 /** Carrega nova página */
            await carregarComponente(`./pages/${pagina}.html`, conteudo);
        });
    });
};

/**
 * Inicialização geral da aplicação
 */
    const iniciarAPP = async () => {
        const containerMenu  = document.querySelector('[data-componente= "menu"]');


    /** Injetar menu */
        await carregarComponente('./components/menu.html', containerMenu);


        /** Ativar comportamento do menu */
        iniciarMenu();

        /** Ativar navegação SPA */
        iniciarLinks();

        /** Carrega página inicial */
        const conteudo = document.querySelector('[data-conteudo]');
        await carregarComponente('./pages/home.html', conteudo);
        };
    iniciarAPP();
