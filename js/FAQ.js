function toggleActive(element) {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
      if (item !== element) {
        item.classList.remove('active');
      }
    });
    element.classList.toggle('active');
  }