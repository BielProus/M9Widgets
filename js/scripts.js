window.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card-img-top');
    
    // Delay for each image to appear one by one
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 300); // Adjust the delay time for each card
    });
  });
  
  