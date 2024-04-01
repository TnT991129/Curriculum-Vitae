document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-links').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.menu-links').style.display = 'none';
  });