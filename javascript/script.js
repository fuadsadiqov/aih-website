// Navbar
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileNav = document.getElementById('mobileNav');
const navList = document.getElementById('mobileList');
const wholePage = document.getElementById('mainPage');
const banner = document.getElementById('banner');
const searchIcon = document.getElementById('search')
const closeSearchIcon = document.getElementById('closeSearch')

hamburgerMenu.addEventListener('click', () => {
  const isNavVisible = mobileNav.style.display === 'flex';
  hamburgerMenu.classList.toggle('open')
  mobileNav.style.display = isNavVisible ? 'none' : 'flex';
  navList.style.display = isNavVisible ? 'none' : 'flex';
  banner.style.display = isNavVisible ? 'flex' : 'none';
  wholePage.style.display = isNavVisible ? 'block' : 'none';
});

// Responsive dropdown
function toggleDropdownOnClick() {
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
  dropdownItems.forEach(item => { 
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}
function toggleDropdownOnResize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    toggleDropdownOnClick();
  } else {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
      item.removeEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }
}
toggleDropdownOnResize();
window.addEventListener('resize', toggleDropdownOnResize);

// Search functionality
searchIcon.addEventListener('click', () => {
  searchIcon.classList.toggle('active')
  document.getElementById('searchInput').focus()
})
closeSearchIcon.addEventListener('click', () => {
  searchIcon.classList.remove('active')
  document.getElementById('searchInput').blur()
})
document.addEventListener("keydown", function(event) {
  if (event.key === "f" && event.ctrlKey) {
    searchIcon.classList.add('active')
    document.getElementById('searchInput').focus()
    event.preventDefault();
  }
  if (event.key === "Escape" && searchIcon.classList.contains('active')) {  
    searchIcon.classList.remove('active')  
    document.getElementById('searchInput').blur()
  }
});

// AOS
AOS.init({once: true});
// Preloader
function hidePreloader() {
  const preloader = document.getElementById('preloader')
  preloader.classList.add('hide')
}
window.addEventListener("load", hidePreloader)

// Tabs
function openTab(tabId){
  const tabs = document.querySelectorAll('.tab')
  const tabButtons = document.querySelectorAll('.tab-button')
    
  tabs.forEach(tab => {
    if(tab.id === tabId){
      tab.classList.add('active-tab')
    }
    else{
      tab.classList.remove('active-tab')
    }
  })
  tabButtons.forEach(button => {
    if(button.getAttribute('onclick').includes(tabId)){
      button.classList.add('active')
    }else{
      button.classList.remove('active')
    }
  })
}