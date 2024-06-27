document.getElementById('people-btn').addEventListener('click', function() {
    window.location.href = 'chat.html'; 
  });
  
document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; 
  });
  
document.getElementById('map-btn').addEventListener('click', function() {
    window.location.href = 'map.html';
  });

function changeLanguage() {
    var language = document.getElementById('language-select').value;
    if (language === 'en') {
        window.location.href = 'setting_en.html';
    } else if (language === 'th') {
        window.location.href = 'setting_th.html';
    }
}
