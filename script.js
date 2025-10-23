const carData = {
    toyota: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 3.0L 6 cilindros em linha (2JZ-GTE), Twin Turbo<br>
               Potência: 280–330 cv<br>
               Torque: ~44 kgfm<br>
               0 a 100 km/h: ~4,9 segundos<br>
               Tração: Traseira<br>
               Câmbio: Manual de 6 marchas ou automático de 4`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.560 kg<br>
               Comprimento: 4.514 mm<br>
               Suspensão: Independente nas 4 rodas<br>
               Freios: Discos ventilados, ABS`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Interior com painel digital, bancos esportivos<br>
               Famoso pelo filme Velozes e Furiosos<br>
               Motor extremamente resistente e tunável<br>
               Considerado um dos maiores ícones JDM`
    },
  
    mitsubishi: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 2.0L 4 cilindros (4G63T), turbo<br>
               Potência: 291 cv<br>
               Torque: ~39 kgfm<br>
               0 a 100 km/h: ~4,6 segundos<br>
               Tração: Integral (AWD) com AYC<br>
               Câmbio: Manual de 5 ou 6 marchas`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.430 kg<br>
               Comprimento: 4.490 mm<br>
               Suspensão: McPherson (frente), Multilink (traseira)<br>
               Freios: Brembo nas 4 rodas`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Versões RS, GSR e MR<br>
               Bancos Recaro, volante Momo<br>
               Ícone do rally mundial<br>
               Muito usado em drift e tuning<br>
               Destaque em filmes e jogos`
    },
  
    nissan: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 3.5L V6 (VQ35DE ou VQ35HR)<br>
               Potência: 287 a 306 cv<br>
               Torque: ~37 kgfm<br>
               0 a 100 km/h: ~5,5 segundos<br>
               Tração: Traseira<br>
               Câmbio: Manual de 6 marchas ou automático`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.460 kg<br>
               Comprimento: 4.315 mm<br>
               Suspensão: Independente nas 4 rodas<br>
               Freios: Discos nas 4 rodas, ABS`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Design esportivo com pegada de GT<br>
               Popular em drift e modificações<br>
               Destaque em Velozes e Furiosos<br>
               Motor com som característico<br>
               Modelo antecessor do Nissan 370Z`
    },
  
    honda: {
        titulo1: "MOTOR E DESEMPENHO",
        texto1: `Motor: 3.2L V6 VTEC (NSX-T manual)<br>
                 Potência: 290 cv a 7.100 rpm<br>
                 Torque: ~31 kgfm a 5.300 rpm<br>
                 0 a 100 km/h: ~5,0 segundos<br>
                 Tração: Traseira<br>
                 Câmbio: Manual de 6 marchas`,
                 
        titulo2: "DIMENSÕES E CHASSI",
        texto2: `Peso: ~1.370 kg<br>
                 Comprimento: 4.430 mm<br>
                 Suspensão: Alumínio com double wishbone nas 4 rodas<br>
                 Freios: Discos ventilados nas 4 rodas`,
        
        titulo3: "EQUIPAMENTOS E CURIOSIDADES",
        texto3: `Chassi e carroceria em alumínio<br>
                 Desenvolvido com colaboração de Ayrton Senna<br>
                 Equilíbrio quase perfeito: motor central-traseiro<br>
                 Ícone japonês dos anos 90 e início dos 2000<br>
                 Aparece em filmes como Velozes e Furiosos<br>e games como Gran Turismo`
        
    },
  
    lexus: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 4.8L V10 aspirado<br>
               Potência: 560 cv<br>
               Torque: ~48 kgfm<br>
               0 a 100 km/h: ~3,7 segundos<br>
               Velocidade Máxima: ~325 km/h<br>
               Câmbio: Automatizado de 6 marchas (paddle shift)`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.480 kg<br>
               Chassi de fibra de carbono<br>
               Suspensão: Independente<br>
               Freios: Carbono cerâmica<br>
               Tração: Traseira`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Som do motor comparado ao de F1<br>
               Produzido entre 2010 e 2012 (apenas 500 unidades)<br>
               Painel digital por causa da velocidade do motor<br>
               Um dos carros japoneses mais icônicos da história`
    },
    subaru: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 2.2L Boxer Turbo (EJ22G)<br>
           Potência: ~280 cv<br>
           Torque: ~37 kgfm<br>
           0 a 100 km/h: ~4,7 segundos<br>
           Velocidade Máxima: ~248 km/h<br>
           Câmbio: Manual de 5 marchas`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.270 kg<br>
           Chassi reforçado baseado no WRX STi Type R<br>
           Suspensão: Independente nas quatro rodas (ajustada pela Bilstein)<br>
           Freios: Discos ventilados com pinças Subaru Tecnica International<br>
           Tração: Integral (AWD) com diferencial central ajustável`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Produzido em comemoração ao 40º aniversário da Subaru e ao título do WRC<br>
           Apenas 424 unidades fabricadas (400 para o Japão)<br>
           Cor exclusiva: “World Rally Blue Mica”<br>
           Aerofólio, para-lamas e capô exclusivos da versão 22B<br>
           Considerado o ápice dos Imprezas clássicos`
   },
    mazda: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 1.3L Twin-Turbo Wankel (13B-REW)<br>
           Potência: ~280 cv<br>
           Torque: ~32 kgfm<br>
           0 a 100 km/h: ~4,9 segundos<br>
           Velocidade Máxima: ~250 km/h<br>
           Câmbio: Manual de 5 ou 6 marchas (dependendo da versão)`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.280 kg (versão Type A)<br>
           Chassi: Monobloco leve com distribuição 50:50<br>
           Suspensão: Independente duplo A (Double Wishbone)<br>
           Freios: Discos ventilados com pinças Brembo<br>
           Tração: Traseira (RWD)`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Última e mais refinada versão do RX-7 (apenas 1.500 unidades produzidas)<br>
           Disponível nas versões Type A, B e C<br>
           Bancos Recaro e rodas BBS exclusivas de fábrica<br>
           Som característico do motor rotativo Twin-Turbo<br>
           Considerado o ápice do RX-7 e um dos ícones dos esportivos japoneses`
    },
    acura: {
      titulo1: "MOTOR E DESEMPENHO",
      texto1: `Motor: 1.8L 4 cilindros aspirado (B18C5 VTEC)<br>
           Potência: ~200 cv<br>
           Torque: ~18,5 kgfm<br>
           0 a 100 km/h: ~6,5 segundos<br>
           Velocidade Máxima: ~233 km/h<br>
           Câmbio: Manual de 5 marchas (curto e preciso)`,
      titulo2: "DIMENSÕES E CHASSI",
      texto2: `Peso: ~1.100 kg<br>
           Chassi reforçado e soldado à mão para maior rigidez<br>
           Suspensão: Duplo A (Double Wishbone) nas quatro rodas<br>
           Freios: Discos ventilados com ABS<br>
           Tração: Dianteira (FWD) com diferencial LSD mecânico`,
      titulo3: "EQUIPAMENTOS E CURIOSIDADES",
      texto3: `Considerado o melhor tração dianteira da história por muitos entusiastas<br>
           Interior com bancos Recaro vermelhos e volante Momo de fábrica<br>
           Produzido entre 1995 e 2001 (variante 1998 é uma das mais desejadas)<br>
           Alta rotação: corte de giro acima dos 8.000 rpm<br>
           Equilíbrio perfeito entre leveza, precisão e resposta do VTEC`
    },
  };
  
function switchcar(carro) {
  const parallaxes = document.querySelectorAll(".parallax");

  parallaxes.forEach(parallax => {
    parallax.classList.remove("toyota", "mitsubishi", "lexus", "honda", "nissan", "subaru", "mazda", "acura");
    parallax.classList.add(carro.toLowerCase());
  });

  const infoDiv = document.getElementById("car-info");
  const data = carData[carro.toLowerCase()];
  const carContainer = document.querySelector(".carview");
  const carDataView = carview[carro.toLowerCase()];

  if (!data || !carDataView) return;

  infoDiv.innerHTML = `
    <div class="infos">
      <h3 class="h3">${data.titulo1}</h3>
      <p class="p">${data.texto1}</p>
    </div>
    <div class="infos">
      <h3 class="h3">${data.titulo2}</h3>
      <p class="p">${data.texto2}</p>
    </div>
    <div class="infos"> 
      <h3 class="h3">${data.titulo3}</h3>
      <p class="p">${data.texto3}</p>
    </div>
  `;

  carContainer.innerHTML = `
    <div class="car-name">
      <h2>${carDataView.titulo}</h2>
    </div>
    ${carDataView.carro}
  `;
}

  const carview = {
    toyota: {
      titulo: "Toyota Supra",
      carro: `<div class="sketchfab-embed-wrapper"> <iframe title="Toyota Supra MK IV (1994)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/eb9bb1eb41db431cb078088ae1ce45f8/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark" id="car"> </iframe> </div>`
    },
  
    mitsubishi: {
      titulo: "Lancer Evo IX",
      carro: `<div class="sketchfab-embed-wrapper"> <div class="sketchfab-embed-wrapper"> <iframe title="2006 Mitsubishi Lancer Evolution IX MR" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/f0509bed976d453c92dfcd83a5ac14e5/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark" id="car"> </iframe> </div> </div>`
    },
  
    nissan: {
      titulo: "Nissan 350z",
      carro: `<div class="sketchfab-embed-wrapper"> <iframe title="Nissan 350Z" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/05e7604a0f4643ab87c141e244813e9a/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark" id="car"> </iframe> </div>`
    },
  
    honda: {
      titulo: "Honda NSX",
      carro: `<div class="sketchfab-embed-wrapper"> <iframe title="Honda NSX-R (2002)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/3dbd02078d764e0781e62d2c7466038b/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"> </iframe> </div>`
    },
  
    lexus: {
      titulo: "Lexus LFA",
      carro: `<div class="sketchfab-embed-wrapper"> <iframe title="2011 Lexus LFA" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/83d062d1cd144e6a944c7415ef864889/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark" id="car"> </iframe> </div>`
    },
    subaru: {
      titulo: "Subaru 22b",
      carro: `<div  class="sketchfab-embed-wrapper"> <iframe title="1998 Subaru IMPREZA 22B STi Version" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/66bd94bdd92a4b79a39cd0307870b4eb/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"> </iframe> </div>`
    },
    mazda: {
      titulo: "mazda rx7",
      carro: `<div class="sketchfab-embed-wrapper"> <iframe title="Mazda RX-7 Spirit R Type A 2002 | www.vecarz.com" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/57ef6f2e2980487080b84e0b16979978/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark&dnt=1"> </iframe> </div>`
    },
    acura: {
      titulo: "integra",
      carro: `<div class="sketchfab-embed-wrapper"> <iframe title="Honda Integra DC2" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/54c665c8055f45c9a1868dc63e56ce8f/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_theme=dark"> </iframe> </div>`
    },
  };
  
window.addEventListener("DOMContentLoaded", () => {
    switchcar('mitsubishi');

const swiper = new Swiper('.catalogo.swiper', {
  slidesPerView: 6, 
  spaceBetween: 20,
  loop: true,
  loopedSlides: 8, 
  speed: 600, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    reverseDirection: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1500: { slidesPerView: 6 },
    1200: { slidesPerView: 5 },
    1000: { slidesPerView: 4 },
    700: { slidesPerView: 3 },
    500: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

});
