window.addEventListener("scroll", function () {
  const header = document.querySelector(".sticky-header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const powPools = document.getElementById("pow-pools");
  const blockchain = document.getElementById("blockchain");
  const wallet = document.getElementById("wallet");
  const powPoolsContent = document.getElementById("pow-pools-content");
  const blockchainContent = document.getElementById("blockchain-content");
  const walletContent = document.getElementById("wallet-content");

  //cartas

  // Ocultar todos los contenidos de secciones
  blockchainContent.style.display = "none";
  walletContent.style.display = "none";

  powPools.addEventListener("click", () => {
    powPoolsContent.style.display = "block";
    blockchainContent.style.display = "none";
    walletContent.style.display = "none";
  });

  blockchain.addEventListener("click", () => {
    powPoolsContent.style.display = "none";
    blockchainContent.style.display = "block";
    walletContent.style.display = "none";
  });

  wallet.addEventListener("click", () => {
    powPoolsContent.style.display = "none";
    blockchainContent.style.display = "none";
    walletContent.style.display = "block";
  });

  const subMenuItems = document.querySelectorAll(".sub-menu li");
  const contentSections = document.querySelectorAll(".content-section");

  subMenuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
      // Cambiar el color del li seleccionado
      subMenuItems.forEach((item) => item.classList.remove("active"));
      menuItem.classList.add("active");

      // Mostrar el contenido de la sección correspondiente
      contentSections.forEach((section) => (section.style.display = "none"));
      contentSections[index].style.display = "block";
    });
  });
});

//muesta el contenido de banner

function showBanner() {
  var banner = document.getElementById("banner");
  banner.style.display = "block";
}

function hideBanner() {
  var banner = document.getElementById("banner");
  banner.style.display = "none";
}

//slideshow
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".card-section");
  const slides = slideContainer.querySelectorAll(".card");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");

  let slideIndex = 0;

  function showSlide(index) {
    slideContainer.style.transform = `translateX(-${index * 33.33}%)`;
  }

  function activateDot(index) {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    activateDot(slideIndex);
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
    activateDot(slideIndex);
  }

  function createDots() {
    const numDots = Math.min(slides.length, 5); // Cambia el número de puntos aquí
    const startIndex = Math.floor((slides.length - numDots) / 2);
    const dots = Array.from({ length: numDots }, (_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        slideIndex = i + startIndex;
        showSlide(slideIndex);
        activateDot(slideIndex);
      });
      return dot;
    });
    dotsContainer.innerHTML = "";
    dotsContainer.append(...dots);
    activateDot(slideIndex);
    dotsContainer.classList.toggle("hidden", slides.length <= numDots);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  createDots();
});

//FAQ

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const panel = accordion.nextElementSibling;
    let isActive = false;

    accordion.addEventListener("click", function () {
      isActive = !isActive;
      panel.style.maxHeight = isActive ? panel.scrollHeight + "px" : "0";
      closeOtherAccordions(accordion);
    });
  });

  function closeOtherAccordions(currentAccordion) {
    accordions.forEach((accordion) => {
      if (accordion !== currentAccordion) {
        const panel = accordion.nextElementSibling;
        panel.style.maxHeight = "0";
      }
    });
  }
});

// ... Código JavaScript anterior ...

function toggleAccordion(accordion) {
  const panel = accordion.nextElementSibling;
  accordion.classList.toggle("active");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

// ... Resto del código JavaScript anterior ...

// Agrega el siguiente código JavaScript para controlar la apertura y cierre del acordeón

// footer

//boton header

function scrollToHeader() {
  window.scrollTo(0, 0); // Desplaza la página hasta el inicio (header)
}
