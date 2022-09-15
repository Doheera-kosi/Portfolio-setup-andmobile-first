/* eslint-disable linebreak-style */
// import data from './proeject-data.js';
/* eslint-disable linebreak-style */
const revealMenu = document.querySelector('.hamburger-menu');
const hideMenu = document.querySelector('.nav-items'); // .hidden-content
const projectContainer = document.getElementById('card-container');
const overLay = document.querySelector('#popup-window');
const popUpContainer = document.querySelector('.popup');
const btnContainer = document.querySelectorAll('.see-project');

revealMenu.addEventListener('click', () => {
  revealMenu.classList.toggle('active');
  hideMenu.classList.toggle('active');
});

document.querySelectorAll('.li-1').forEach((n) => n.addEventListener('click', () => {
  revealMenu.classList.remove('active');
  hideMenu.classList.remove('active');
}));

const data = [
  {
    id: '1',
    title: 'Keeping track of',
    src: 'assets/images/popup-pic.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    lang: ['Ruby on Rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    id: '2',
    title: 'Tonic',
    src: 'assets/images/wheat.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    lang: ['Ruby on Rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    id: '3',
    title: 'Uber Application',
    src: 'assets/images/wheat.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    lang: ['Ruby on Rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    id: '4',
    title: 'Multi-Post Stories',
    src: 'assets/images/wheat.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    lang: ['Ruby on Rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    id: '5',
    title: 'Facebook',
    src: 'assets/images/wheat.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    lang: ['Ruby on Rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    id: '6',
    title: 'WhatsApp',
    src: 'assets/images/wheat.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    lang: ['Ruby on Rails', 'css', 'JavaScript'],
    live: '#',
    source: '#',
  },
];

const retTech = (lang) => {
  let language = '';
  lang.forEach((tech) => {
    language += `<li class="on li">${tech}</li>`;
  });
  return language;
};

const popUp = (id) => {
  overLay.style.display = 'flex';
  data.forEach((p) => {
    if (id === p.id) {
      popUpContainer.innerHTML = `
          <button type="button" id="close-popup-btn">X</button>
          <img src= ${p.src} alt="wheats.png" class="card-1-img">
          <div class="card-text cd-txt">
            <h2 class="title">${p.title}</h2>
            <ul class="tags tag">
              ${retTech(p.lang)}
            </ul>
            <p class="desc">${p.description}</p>
            <div class="pop-buttons">
              <button type="button" class="see-live">
                See Live
                <i class="far fa-github"></i>
              </button>
              <button type="button" class="see-source">
                See Source
                <i class="far fa-github"></i>
              </button>            
            </div>

          </div>
    `;
    }
  });
  const closeBtn = document.querySelector('#close-popup-btn');

  closeBtn.addEventListener('click', () => {
    overLay.style.display = 'none';
  });
};

const btns = () => {
  btnContainer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popUp(e.target.id);
    });
  });
};

const renderProjects = () => {
  data.forEach((p) => {
    projectContainer.innerHTML += `
    <div class="card-1">
          <img src= ${p.src} alt="wheats.png" class="card-1-img">
          <div class="card-text">
            <h2>${p.title}</h2>
            <ul class="tags">
              ${retTech(p.lang)}
            </ul>
            <button type="button" id=${p.id} onclick="popUp(this.id)" class="see-project">
              See Project
            </button>
          </div>
        </div>
    `;
  });
};

window.onload = () => {
  renderProjects();
  btns();
};