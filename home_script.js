function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    console.log(reveals);
    for(var i=0; i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
window.onload = function(){
    window.addEventListener('scroll', reveal);
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
          event.preventDefault();
          
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
      
          // Scroll to the bottom of the page
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
          });
        }
      });
      
}

