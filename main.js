document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('header[id], section[id]');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  // Adjust photo container aspect ratio dynamically on desktop
  function adjustHeroPhotoAspect() {
    const textCol = document.querySelector('.hero-text-col');
    const photoWrapper = document.querySelector('.hero-photo-wrapper');
    if (textCol && photoWrapper && window.innerWidth > 820) {
      const targetHeight = textCol.offsetHeight;
      // 4:5 academic portrait aspect ratio constraint
      const naturalWidth = Math.round(targetHeight * 0.8);
      photoWrapper.style.height = `${targetHeight}px`;
      photoWrapper.style.width = `${naturalWidth}px`;
      photoWrapper.style.maxWidth = `${naturalWidth}px`;
    } else if (photoWrapper) {
      photoWrapper.style.height = '';
      photoWrapper.style.width = '';
      photoWrapper.style.maxWidth = '340px';
    }
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('resize', adjustHeroPhotoAspect);
  window.addEventListener('load', adjustHeroPhotoAspect);

  updateActiveLink();
  adjustHeroPhotoAspect();
});