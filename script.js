  // Dados
  const produtos = [
    { nome: "Família reunida", descricao: "Uma arte que reúne todos os membros da família em um só lugar.", imagem: "caneca0.png" },
    { nome: "Quem já partiu", descricao: "Homenagem eterna para quem vive para sempre no seu coração.", imagem: "caneca1.png" },
    { nome: "Você e seu pet", descricao: "A conexão especial com seu melhor amigo em uma arte única.", imagem: "caneca2.png" },
    { nome: "Datas especiais", descricao: "Aniversário, casamento, nascimento, ou qualquer data que merece ser celebrada.", imagem: "caneca3.png" },
    { nome: "Legado familiar", descricao: "Para eternizar a história de uma família, um negócio ou uma trajetória.", imagem: "caneca4.png" },
    { nome: "Solte a imaginação", descricao: "Conte sua ideia e nós transformamos em arte, do jeitinho que você sonhou.", imagem: "caneca5.png" }
  ];

  const passos = [
    { numero: 1, titulo: "Compartilhe sua história", descricao: "Conte quem você quer homenagear, envie fotos e os elementos que fazem parte dessa memória." },
    { numero: 2, titulo: "Criamos o desenho à mão", descricao: "Desenvolvemos uma arte exclusiva, revisamos com você até transmitir a emoção certa." },
    { numero: 3, titulo: "Aplicação na caneca", descricao: "Transferimos sua arte para a caneca com materiais de alta durabilidade." },
    { numero: 4, titulo: "Embalagem e envio", descricao: "Enviamos com todo cuidado para chegar até você como um presente especial." }
  ];

  // Estilos com imagens placeholder (ilustrativas)
  const estilos = [
    { nome: "Traço delicado", descricao: "Ilustração com linhas finas e suaves, ideal para retratos.", cor: "#e8d5f0", icon: "fa-pencil" },
    { nome: "Aquarela", descricao: "Efeito de pintura em aquarela, cheio de vida e cor.", cor: "#d4e8f0", icon: "fa-droplet" },
    { nome: "Minimalista", descricao: "Poucos traços, muita personalidade.", cor: "#f0e8d5", icon: "fa-circle" },
    { nome: "Vintage", descricao: "Estilo retrô com texturas envelhecidas.", cor: "#d5c8b5", icon: "fa-camera-retro" },
    { nome: "Geométrico", descricao: "Formas e padrões modernos.", cor: "#c8d5e8", icon: "fa-shapes" },
    { nome: "Lettering", descricao: "Arte com letras desenhadas à mão.", cor: "#f0d5e8", icon: "fa-font" }
  ];

  // Renderização
  function renderMain() {
    document.getElementById('productGrid').innerHTML = produtos.map(p => `
      <div class="product-card">
        <img src="${p.imagem}" alt="${p.nome}" class="product-image" 
             onclick="openLightbox('${p.imagem}')" style="cursor: zoom-in;">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <div style="margin-top:20px;"><a href="#contato" class="btn btn-outline" style="padding:6px 16px;">Encomendar</a></div>
      </div>
    `).join('');

    document.getElementById('stepsContainer').innerHTML = passos.map(p => `
      <div class="step-item">
        <div class="step-number">${p.numero}</div>
        <h4>${p.titulo}</h4>
        <p>${p.descricao}</p>
      </div>
    `).join('');
  }

  function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Trava o scroll da página enquanto vê a foto
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
  }

  function renderStyles() {
    document.getElementById('styleGrid').innerHTML = estilos.map(e => `
      <div class="style-card">
        <div class="style-image" style="background: linear-gradient(135deg, ${e.cor} 0%, ${e.cor}dd 100%); display: flex; align-items: center; justify-content: center;">
          <i class="fas ${e.icon}" style="font-size: 3rem; color: var(--primary); opacity: 0.8;"></i>
        </div>
        <h3>${e.nome}</h3>
        <p>${e.descricao}</p>
        <div style="margin-top:20px;"><a href="#" onclick="showPage('main'); setTimeout(() => document.getElementById('contato').scrollIntoView({behavior: 'smooth'}), 100);" class="btn btn-outline" style="padding:6px 16px;">Quero este</a></div>
      </div>
    `).join('');
  }

  // Navegação entre páginas
  function showPage(page) {
    document.getElementById('main-page').classList.remove('active');
    document.getElementById('styles-page').classList.remove('active');
    
    if (page === 'main') {
      document.getElementById('main-page').classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById('styles-page').classList.add('active');
      renderStyles();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Inicialização
  renderMain();

  // Links internos suaves
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Expor função global
  window.showPage = showPage;
