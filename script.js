// Adiciona efeito de hover nos botões
const buttons = document.querySelectorAll('.cta-button, .map-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#005f99'; // Cor mais escura ao passar o mouse
        button.style.transform = 'scale(1.1)'; // Aumenta o tamanho
        button.style.transition = 'all 0.3s ease'; // Transição suave
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#00aaff'; // Volta à cor original
        button.style.transform = 'scale(1)';
    });
});

// Adiciona transição suave ao scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste para evitar sobreposição
                behavior: 'smooth' // Animação suave
            });
        }
    });
});

// Efeito de fundo dinâmico ao rolar a página
window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('hero-section');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        heroSection.style.backgroundColor = '#003366'; // Muda o fundo após rolar
        heroSection.style.transition = 'background-color 0.5s ease';
    } else {
        heroSection.style.backgroundColor = 'transparent'; // Volta ao original
    }
});

// Efeito de fade-in ao carregar a página
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 1.5s ease';
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = '1'; // Faz o fade-in
        });
    }, 500); // Pequeno atraso para melhorar o impacto visual
});
