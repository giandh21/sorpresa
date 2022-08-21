const documentReady = () => {
    const heroTitle = document.querySelector('.hero__title');
    const heroButtonSi = document.getElementById('heroButtonSi');
    const heroButtonNo = document.querySelector('#heroButtonNo');
  
    const nowZomosNobios = () => {
      alert('💞 Gracias por ser parte de mi Vida 💞');
      location.href = 'https://www.youtube.com/watch?v=E1ZAIZGEMK8';
    };
  
    const evitarKCRompanMyBobo = () => {
      heroButtonNo.style.position = 'absolute';
      heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
      heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
    };
  
    // const partner = prompt('🥰 Dyme 2 naMe 🥰');
    // heroTitle.innerHTML += partner + ' ❤';
  
    //heroButtonSi.addEventListener('click', nowZomosNobios);
    heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
  };
  
  document.addEventListener('DOMContentLoaded', documentReady);