const ButtonToggle = document.getElementById("myBtn");
const GetNAVOUTNOW = document.getElementById("TurnNavOFF");

ButtonToggle.addEventListener("click", GetToggleON)
GetNAVOUTNOW.addEventListener("click", GetToggleOUST)

function GetToggleON() {
    document.getElementById("GetNavOnNow").style.display = ('block')
    document.getElementById("NavbarVeryMainNo").style.top = ('-100px')
    document.getElementById('MainBottomNavbar').style.bottom = ('-70px')
    document.getElementById("MainNavSideOFF").style.transform = "translateX(-0px)"
    ButtonToggle.style.display = ("none")
    document.getElementById('MainNavSideOFF').style.display = ('block')
    document.getElementById("Backgro").style.opacity = "1"
    document.getElementById("Backgro").style.visibility = "visible"
    document.getElementById("Backgro").style.width = "100%"
}

function GetToggleOUST() {
    document.getElementById("GetNavOnNow").style.display = ('none')
    document.getElementById("MainNavSideOFF").style.transform = "translateX(-310px)"
    ButtonToggle.style.display = ("block")
    document.getElementById("NavbarVeryMainNo").style.top = ('0px')
    document.getElementById('MainBottomNavbar').style.bottom = ('0px')
    document.getElementById("Backgro").style.opacity = "1"
    document.getElementById("Backgro").style.visibility = "hidden"
    document.getElementById("Backgro").style.width = "0px"
}

// const myTimeout = setTimeout(myGreeting, 500);

// function myGreeting() {
//     document.getElementById("NavbarVeryMainNo").style.top = ('0px')
// }

function GetSearchOn() {
    document.getElementById("SearchBox").style.top = "0px"
    document.getElementById("SearchBox").style.opacity = "1"
    if(this.scrollY > 350) {
        document.getElementById("SearchBox").style.top = "58px"
    }
    // document.body.style.backdropFilter = "blur(20px)"
    document.getElementById("LanguageToggle").style.opacity = "0"
}

function CloseSearch() {
    document.getElementById("SearchBox").style.opacity = "0"
    document.getElementById("SearchBox").style.top = "-140px"
    // document.body.style.backdropFilter = "blur(0px)"
}

function LanguageSetup() {
    document.getElementById("LanguageToggle").style.bottom = "58px"
    document.getElementById("LanguageToggle").style.opacity = "1"
    document.getElementById("SearchBox").style.opacity = "0"
}

function CloseLanguageSetup() {
    document.getElementById("LanguageToggle").style.bottom = "-160px"
    document.getElementById("LanguageToggle").style.opacity = "0"
}

function changeCss() {
    var navElement = document.querySelector("nav"); //after >
    this.scrollY > 450 ? navElement.style.opacity = 1 : navElement.style.opacity = 0;

    var navElement = document.getElementById("SearchBox"); //after >
    this.scrollY > 450 ? navElement.style.top = "58px" : navElement.style.opacity = "0"

    var HeaderPall = document.querySelector("header"); //after >
    this.scrollY > 350 ? HeaderPall.style.opacity = 0 : HeaderPall.style.opacity = 1;

}

changeCss()
  
window.addEventListener("scroll", changeCss , false);

function BeginNavHid() {
      document.getElementById('MainNavSideOFF').style.display = ('none')
}

BeginNavHid()

setTimeout(function() {
    document.getElementById('Preloader').style.width = "0px"
    document.getElementById('InsidePreLoa').style.opacity = "0"
    document.getElementById('InsidePreLoa').style.visibility = "hidden"
}, 1500);
