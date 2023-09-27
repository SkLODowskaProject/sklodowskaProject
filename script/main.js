//let userAgent = navigator.userAgent;
//if(userAgent.match(/safari/i)){
//  let els = document.getElementsByClassName('.parallax');
//  if(els.lenght > 0) {
//    console.log('parallax');
//  }
//};



var w = document.documentElement.clientWidth || window.innerWidth;

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("menubutton").style.display = "none";
}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menubutton").style.display = "";
}


document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen1").click();
document.getElementById("defaultOpen2").click();
document.getElementById("defaultOpen3").click();


function openTab(evt, wwww) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(wwww).style.display = "block";
    evt.currentTarget.className += " active";
  }



  


