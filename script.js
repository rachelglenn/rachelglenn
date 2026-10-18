const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const researchAreas = [
  'Quantum Computing',
  'Condensed Matter Physics',
  'Medical Physics',
  'Quantitative MRI',
  'Computational Imaging',
  'Image Reconstruction',
  'Medical Image Segmentation',
  'Radiomics & Imaging Biomarkers',
  'AI / Machine Learning',
  'Radar Imaging',
  'Synthetic Aperture Radar (SAR)',
  'Quantum Chemistry',
  'Nonlinear Optical Spectroscopy',
  'High-Performance Computing',
  'Autonomous Sensing Systems'
];

const researchAreaList = document.querySelector('#research-area-list');
if (researchAreaList) {
  researchAreaList.innerHTML = researchAreas
    .map((area, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${area}</span>`)
    .join('');
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
