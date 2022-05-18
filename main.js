/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("phone-nav").style.width = "100%";
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("phone-nav").style.width = "0%";
}
const menuItems = document.body.querySelector('.menu-items');
menuItems.addEventListener('mouseup', close = () =>{
    document.getElementById("phone-nav").style.width = "0%";
});
function darkMode(){
    var element = document.body;
    element.classList.toggle('dark-mode');
    if(document.querySelector('.mode-icon').style.transform === "rotate(180deg)"){
        document.querySelector('.mode-icon').style.transform = "rotate(-360deg)";
    }else{
        document.querySelector('.mode-icon').style.transform = "rotate(180deg)";
    }
    if(document.querySelector('.mode-btn-desk').style.transform === "rotate(180deg)"){
        document.querySelector('.mode-btn-desk').style.transform = "rotate(-360deg)";
    }else{
        document.querySelector('.mode-btn-desk').style.transform = "rotate(180deg)";
    }
}

