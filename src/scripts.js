const accordionButton = document.querySelectorAll('.accordion-panel-button');
const closeButton = document.querySelector('.accordion-panel-button-close');

const handleClick = (event) => {

  // Finds panel to expand
  const button = event.currentTarget;
  const content = button.closest('.accordion-panel').querySelector('.accordion-panel-content');

  // Finds SVGs
  const expandIcon = button.firstElementChild;
  const collapseIcon = button.lastElementChild;

  // Swaps circle plus icon / circle minus icon
  expandIcon.classList.toggle('collapsed');
  collapseIcon.classList.toggle('collapsed');

  // Expands panel by removing 'collapsed' class
  content.classList.toggle('collapsed');
}

// Add listener to all buttons
accordionButton.forEach(button =>
  button.addEventListener('click', handleClick)
);
