const headerMenu = [
  { name: "Home", 
    link: "index.html", 
    id: "home-page",
    active: true
  },
  { 
    name: "Contact Us", 
    link: "#", 
    id: "contact-us-page",
    active: false
  },
  { 
    name: "About Us", 
    link: "#", 
    id: "about-us-page",
    active: false
  },
  { 
    name: "Return Policy", 
    link: "#", 
    id: "return-policy-page",
    active: false
},
  { 
    name: "Privacy policy", 
    link: "#", 
    id: "privacy-policy-page",
    active: false
  },
  { 
    name: "Temrs & Condition", 
    link: "#", 
    id: "temrs-page",
    active: false
  }
];


// Displaying header menu on the top of the page
document.getElementById("common-header-top").innerHTML = `
<div class="header_section">
    <div class="container">
        <div class="containt_main">
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <ul class="menu-listing-group" id="menu-drawer-listing">
                </ul>
            </div>
            <div class="header_left_area">
                <span class="toggle_icon" onclick="openNav()"><img src="images/menu.svg"></span>
            </div>
            <div class="header_middle_area">
                <div class="logo">
                    <a href="index.html"><img src="images/logo.svg" alt="Logo"></a>
                </div>
            </div>
            <div class="header_right_area">
                <div class="header_box">
                    <div class="login_menu">
                        <ul>
                            <li><a href="" id="cart-link">
                                <img src="images/cart.svg" alt="Cart" class="cart-ico">
                                <span class="cart-text">Cart</span>
                                <span class="header-cart-counter" id="header-cart-count">0</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

//populate the menu items
// headerMenu.forEach(menuItemList => {
//   document.getElementById("menu-drawer-listing").innerHTML += `
//     <li><a id="${menuItemList.id}" href="${menuItemList.link}">${menuItemList.name}</a></li>
//   `;
// });

//populate the menu items
const menuList = document.getElementById("menu-drawer-listing");
menuList.innerHTML = ""; // Clear before populating
headerMenu.forEach(menuItem => {
  menuList.innerHTML += `<li><a id="${menuItem.id}" href="${menuItem.link}">${menuItem.name}</a></li>`;
});

// For redirecting to the cart page when the cart icon is clicked
const cartLink = document.getElementById('cart-link');
cartLink.addEventListener('click', function(event){
    event.preventDefault(); // Prevent default link behavior
    window.location.href = 'cart.html'; // Redirect to cart page
});



//For cart counter
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    // const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('header-cart-count').textContent = totalItems;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
updateCartCount();

// Save cart back to localStorage
localStorage.setItem('cart', JSON.stringify(cart));


const activePage = headerMenu.find(menuItemList => menuItemList.active);
if (activePage) {
  const activeLink = document.getElementById(activePage.id);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}