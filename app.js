fetch('all-products.json')
  .then(response => response.json())
  .then(data => {
    renderCollection(data, "New Arrivals", "new-arrivals");
    renderCollection(data, "Trending", "trending");
    renderCollection(data, "Custom Made", "custom-made");
  });

function renderCollection(products, collectionName, containerId) {
  const container = document.getElementById(containerId);

  const filtered = products.filter(p => p.collection === collectionName);

  const html = filtered.map(product => `
    <div class="swiper-slide">
      <div class="box_main">
        <a class="product_card_link" href="product-detail.html?id=${product.id}">
          <div class="product_card_img">
            <img src="${product.image}" alt="${product.name}">
          </div>
        </a>  
          <h4 class="product_card_titile">${product.name}</h4>
          <p class="price_text">
            Price <span style="color: #262626;">$${product.price.toFixed(2)}</span>
          </p>
          <p class="product_rating"><span class="review-no"><i class="fa fa-star" aria-hidden="true"></i> ${product.rating}</span>(${product.noOfReview})</p>
          <div class="btn_main">
            <div class="buy_bt">
              <a href="product-detail.html?id=${product.id}">Buy Now</a>
            </div>
            <div class="seemore_bt">
              <a href="product-detail.html?id=${product.id}">See More</a>
            </div>
          </div>
      </div>
    </div>
  `).join('');

  container.innerHTML += html;
}