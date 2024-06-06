//script navbar
document.addEventListener("DOMContentLoaded", function() {
    var navbarItems = document.querySelectorAll(".navbar-nav .nav-link");
    navbarItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        event.preventDefault();
        var targetId = item.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  //skrip scroll
  window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    for (let i = 0; i < parallax.length; i++) {
      let scrolled = window.scrollY;
      parallax[i].style.backgroundPositionY = -(scrolled * 0.2) + 'px';
    }
  });
  
  // Skrip Tawk.to
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6600482f1ec1082f04daa702/1hpohjuob';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();