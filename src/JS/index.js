    // Animación hamburguesa a X y menú deslizante
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        menuIcon.classList.add('open');
        menu.classList.add('slide-in');
      } else {
        menuIcon.classList.remove('open');
        menu.classList.remove('slide-in');
      }
    });

  //   const videos = [
  //   '/148210-793717953_tiny.mp4',
  //   '/148208-793717949_tiny.mp4',
  //   '/135160-761273559_tiny.mp4'
  // ];

  // let currentIndex = 0;
  // const videoPlayer = document.getElementById('videoPlayer');

  // function changeVideo() {
  //   // Empieza la transición (se desvanece)
  //   videoPlayer.style.opacity = 0;

  //   setTimeout(() => {
  //     currentIndex = (currentIndex + 1) % videos.length;

  //     // Cambia el source
  //     videoPlayer.querySelector('source').src = videos[currentIndex];
  //     videoPlayer.load();
  //     videoPlayer.play();

  //     // Vuelve a aparecer suavemente
  //     videoPlayer.style.opacity = 1;
  //   }, 1000); // Espera 1s para hacer el cambio (coincide con el transition)
  // }

  // // Cambia de video cada 12 segundos (ajusta según duración real de tus videos)
  // setInterval(changeVideo, 6000);


  function openFullscreen(card) {
    const video = card.querySelector('video');
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen(); // IE/Edge
    }
  }
 const slides = document.querySelector('.carousel-holder');
  const totalSlides = document.querySelectorAll('.slide').length;
  let index = 0;

  // --- Función para mover el carrusel ---
  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  // --- Flechas manuales ---
  document.querySelector('.arrow.left').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
    resetAutoSlide();
  });

  document.querySelector('.arrow.right').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    showSlide(index);
    resetAutoSlide();
  });

  // --- Movimiento automático ---
  let autoSlide = setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 4000); // cambia cada 4 segundos

  // --- Si el usuario usa las flechas, se reinicia el temporizador ---
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      index = (index + 1) % totalSlides;
      showSlide(index);
    }, 4000);
  }
