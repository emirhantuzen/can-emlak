### 3. `script.js`
```javascript
// İlanları yükle
fetch('ilanlar.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('properties');

    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('property');

      card.innerHTML = `
        <img src="${item.resim}" alt="${item.baslik}">
        <div class="info">
          <h3>${item.baslik}</h3>
          <p>${item.konum} - ${item.fiyat}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('İlanlar yüklenemedi:', error));

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000); // 5 saniyede bir kaydır
