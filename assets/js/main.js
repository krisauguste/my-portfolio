// Simple JS for mobile nav toggle and basic active link handling
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(navMenu.style.display === 'flex') navMenu.style.display = 'none';
    else navMenu.style.display = 'flex';
  });

  // Smooth scroll
  document.querySelectorAll('a.nav-link').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
      this.classList.add('active');
      const id = this.getAttribute('href');
      if(id && id.startsWith('#')){
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
      }
      if(window.innerWidth <= 600) navMenu.style.display = 'none';
    });
  });
});