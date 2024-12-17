let nav =document.getElementById("navbar");
const navbarSetOffTop = nav.navbarSetOffTop;
window.addEventListener('scroll',()=>{
    if(window.scrollY >= navbarSetOffTop){
        nav.classList.add("fixed");

    }else{
        nav.classList.remove("fixed");

    }
});