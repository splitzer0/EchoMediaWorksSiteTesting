var DeskMenu = document.getElementById("NavMenu-Desktop");
DeskMenu.style.width = "0px";

var MobMenu = document.getElementById("NavMenu-Mobile");
MobMenu.style.width = "0px";


var body = document.body;
var bgImages = ["Ocean_01.png","Void_01.png","HelosChamber.png"];


const delay = ms => new Promise(res => setTimeout(res, ms));
const initIndex = async() => {
  changeImage();
  await delay(10000);
  initIndex();
}

var bgBackgroundToShow = 0;

function changeImage(){
 bgBackgroundToShow += 1;

 if (bgBackgroundToShow >= 3){
   bgBackgroundToShow = 0;
 }

body.style.backgroundImage = "url(" + bgImages[bgBackgroundToShow] + ")";
}

function toggleMenuDesk(){
  console.log(DeskMenu.style);

  if(DeskMenu.style.width == "0px"){
    DeskMenu.style.width = "300px";
  } else if(DeskMenu.style.width == "300px"){
    DeskMenu.style.width = "0px";
  }
}
function toggleMenuMob(){
  console.log(MobMenu.style);

  if(MobMenu.style.width == "0px"){
    MobMenu.style.width = "300px";
  } else if(MobMenu.style.width == "300px"){
    MobMenu.style.width = "0px";
  }
}

function takeMeHome(){
  window.open("file:///C:/Users/27883/Desktop/folders/Portfolio%20Site%203.0/index.html","_self");
}
