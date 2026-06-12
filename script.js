// Mensagem de boas-vindas
window.addEventListener('load', () => {
    alert('Bem-vindo ao Agrinho 2026! Vamos conhecer o agro sustentável.');
});

// Botão para destacar dicas de sustentabilidade
const dicasBtn = document.getElementById('dicasBtn');
if (dicasBtn) {
    dicasBtn.addEventListener('click', () => {
        const lista = document.querySelector('ul');
        if(lista.style.backgroundColor === 'lightyellow') {
            lista.style.backgroundColor = '';
        } else {
            lista.style.backgroundColor = 'lightyellow';
        }
    });
}

// Efeito ao passar o mouse nas seções
const secoes = document.querySelectorAll('section');
secoes.forEach(secao => {
    secao.addEventListener('mouseenter', () => {
        secao.style.backgroundColor = '#e8f5e9';
    });
    secao.addEventListener('mouseleave', () => {
        secao.style.backgroundColor = 'white';
    });
});