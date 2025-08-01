### 3. `script.js`
```javascript
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
