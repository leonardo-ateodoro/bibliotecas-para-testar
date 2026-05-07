/**
 * Inicializa comportamento do menu mobile
 */
export const iniciarMenu = () => {
  const menus = document.querySelectorAll ('[data-menu]');
  menus.forEach((menu) => {
    const botao = menu.querySelector('.menu__botao');
    
    /**
     * Alterna estado do menu
     */
    const toggleMenu = () => {
      menu.classList.toggle('active');
      const ativo = menu.classList.contains('active');
      botao.setAttribute('aria-expanded',ativo); 
      botao.setAttribute('aria-label', ativo ? 'Fechar Menu' : 'Abrir Menu');
    };
    /**
     * Fecha o menu ao pressionar ESC
     */
    const fecharComEsc = (event) => {
      const isEsc = event.key === 'Escape';
      const ativo = menu.classList.contains('active');
      if (isEsc && ativo) {
        menu.classList.remove('active');
        botao.setAttribute('aria-expanded', false);
        botao.setAttribute('aria-label', 'Abrir Menu');
        botao.focus();
      }

       };
   

    /** Evento de clique */
    botao.addEventListener('pointerdowm', toggleMenu);

    /** Evento global de teclado */
    document.addEventListener('keydown', fecharComEsc);
  });
};