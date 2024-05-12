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
  // Search close when proces
  document.getElementById("SearchBox").style.opacity = "0"
  document.getElementById("SearchBox").style.top = "-140px"
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
  if (this.scrollY > 350) {
    document.getElementById("SearchBox").style.top = "58px"
  }
  // document.body.style.backdropFilter = "blur(20px)"
  document.getElementById("LanguageToggle").style.opacity = "0"
  // close theme when Search work
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  MenuLinksCloseCheck()
}

function CloseSearch() {
  document.getElementById("SearchBox").style.opacity = "0"
  document.getElementById("SearchBox").style.top = "-140px"
  // document.body.style.backdropFilter = "blur(0px)"
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  document.getElementById("SearchBox").style.zIndex = "2"
}

function LanguageSetup() {
  document.getElementById("LanguageToggle").style.bottom = "56px"
  document.getElementById("LanguageToggle").style.opacity = "1"
  document.getElementById("SearchBox").style.opacity = "0"
  // close theme when language proces
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
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

function ThemeSetupCheck() {
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "1"
  ThemeSetUP.style.bottom = "58px"
  ThemeSetUP.style.zIndex = "3";
  document.getElementById('MainBottomNavbar').style.zIndex = "4";
  document.getElementById("SearchBox").style.zIndex = "3"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "visible"
  document.getElementById("Backgro").style.width = "100%"
  // document.body.style.overflow = "hidden"
  // language hide when click
  document.getElementById("LanguageToggle").style.bottom = "-160px"
  document.getElementById("LanguageToggle").style.opacity = "0"
  MenuLinksCloseCheck()
}

function ThemeCloseCheck() {
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  document.body.style.overflow = "scroll"
  // language hide when click
  document.getElementById("LanguageToggle").style.bottom = "-160px"
  document.getElementById("LanguageToggle").style.opacity = "0"
  // IF close theme search will close too
  document.getElementById("SearchBox").style.opacity = "0"
  document.getElementById("SearchBox").style.top = "-140px"
  document.getElementById("SearchBox").style.zIndex = "1"
}

// Menu toggle

function MenuLinksSetup() {
  document.getElementById("ToogleLinks").style.bottom = "70px"
  document.getElementById("MenuBlurToggleDirefent").style.bottom = "0"
  document.getElementById('MainBottomNavbar').style.zIndex = "12";
  ThemeCloseCheck()
}

function MenuLinksCloseCheck() {
  document.getElementById("ToogleLinks").style.bottom = "-370px"
  document.getElementById("MenuBlurToggleDirefent").style.bottom = "-100%"
  document.getElementById('MainBottomNavbar').style.zIndex = "4";
}

changeCss()

window.addEventListener("scroll", changeCss, false);

function BeginNavHid() {
  document.getElementById('MainNavSideOFF').style.display = ('none')
}

BeginNavHid()

setTimeout(function () {
  document.getElementById('Preloader').style.width = "0px"
  document.getElementById('InsidePreLoa').style.opacity = "0"
  document.getElementById('InsidePreLoa').style.visibility = "hidden"
  document.body.style.overflow = "scroll"
}, 1500);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'green';

const applyTheme = (theme) => {
  const target = document.querySelector(`[data-theme="${theme}"]`);
  document.documentElement.setAttribute("data-selected-theme", theme);
  document.querySelector(pressedButtonSelector).setAttribute('aria-pressed', 'false');
  target.setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
  const target = event.target;
  const isPressed = target.getAttribute('aria-pressed');
  const theme = target.getAttribute('data-theme');

  if (isPressed !== "true") {
    applyTheme(theme);
    localStorage.setItem('selected-theme', theme);
  }
}

const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme && savedTheme !== defaultTheme) {
    applyTheme(savedTheme);
  }
};

setInitialTheme();

const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', handleThemeSelection);
});

// Settings

function setting() {
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "none"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "101"
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 900);
  setTimeout(function () {
    document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 160);
  document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODY';
}

function ClOSESettingsCheck() {
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
}

// Theme selecter on settings

function OpenThemeSecOnSettings() {
  // close settings first when toggle settings
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
  setTimeout(function () {
    // Theme toggle
    const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
    ThemeSetUP.style.opacity = "1"
    ThemeSetUP.style.bottom = "58px"
    ThemeSetUP.style.zIndex = "3";
    document.getElementById('MainBottomNavbar').style.zIndex = "4";
    document.getElementById("SearchBox").style.zIndex = "3"
    document.getElementById("Backgro").style.opacity = "1"
    document.getElementById("Backgro").style.visibility = "visible"
    document.getElementById("Backgro").style.width = "100%"
    // document.body.style.overflow = "hidden"
    // language hide when click
    document.getElementById("LanguageToggle").style.bottom = "-160px"
    document.getElementById("LanguageToggle").style.opacity = "0"
  }, 800);
}

function OpenLANGUAGEsecOnSettings() {
    // close settings first when toggle settings
    document.getElementById("CropSetting").style.marginTop = "70rem"
    setTimeout(function () {
      document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
      document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
      document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
      // document.getElementById("CropSetting").style.marginTop = "0rem"
    }, 100);
    setTimeout(function () {
      // Language toggle
      document.getElementById("LanguageToggle").style.bottom = "58px"
      document.getElementById("LanguageToggle").style.opacity = "1"
      document.getElementById("SearchBox").style.opacity = "0"
      // close theme when language proces
      const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
      ThemeSetUP.style.opacity = "0"
      ThemeSetUP.style.bottom = "-240px"
      document.getElementById("Backgro").style.opacity = "1"
      document.getElementById("Backgro").style.visibility = "hidden"
      document.getElementById("Backgro").style.width = "0px"
    }, 830);
}

// ALERTCLICK()

function ALERTCLICK() {
  document.getElementById("OVERLAYSETUP").style.display = "block"
}

function OFFHOMESECURECheck() {
  document.getElementById("OVERLAYSETUP").style.display = "none"
}