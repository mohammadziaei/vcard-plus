// validation fields
( () => {
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// sticky sidebar
const mediaQuery=window.matchMedia('(max-width:992px)');
const sidebarElement = document.getElementById("sidebar");
const stickyOffset = sidebarElement.offsetTop;

function makeSticky() {
  if (window.scrollY >= stickyOffset) {
    sidebarElement.style.position = "fixed";
    sidebarElement.style.top = "10px";
  } else {
    sidebarElement.style.position = "relative";
    sidebarElement.style.top = "0";
  }
}

if (!(mediaQuery.matches)){
  window.addEventListener("scroll", makeSticky);
}


// switch theme
var btnDark=document.querySelector('#switch-theme .theme-dark');
var btnLight=document.querySelector('#switch-theme .theme-light');

if (localStorage.getItem('theme') === 'light') {
  document.getElementsByTagName('html')[0].setAttribute('data-bs-theme','light');
  btnDark.classList.remove('hidden');
  btnLight.classList.add('hidden');
}
btnDark.addEventListener('click',function(){
  document.getElementsByTagName('html')[0].setAttribute('data-bs-theme','dark');
  localStorage.setItem('theme', 'dark');
  this.classList.toggle('hidden');
  btnLight.classList.toggle('hidden');
})

btnLight.addEventListener('click',function(){
  document.getElementsByTagName('html')[0].setAttribute('data-bs-theme','light');
  localStorage.setItem('theme', 'light');
  this.classList.toggle('hidden');
  btnDark.classList.toggle('hidden');
})


// map
var mapEl=document.getElementById('map');
if (mapEl!=undefined){
  var map = L.map('map').setView([mapEl.getAttribute('data-Longitude'),mapEl.getAttribute('data-Latitude') ], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
  }).addTo(map);
  var marker = L.marker([mapEl.getAttribute('data-Longitude'),mapEl.getAttribute('data-Latitude') ]).addTo(map);

}


document.querySelectorAll('.wrap-emoji .emoji').forEach(emoji => {
  emoji.addEventListener('click', (e) => {
    var emojiAlt = e.target.getAttribute('alt');
    document.getElementById('commentForm').value += emojiAlt;
  });
});