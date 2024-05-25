function ExitFromFontPage() {
    setTimeout(function () {
        window.open("../index.html", "_parent");
      }, 250);
}

function ThemeSetupCheck() {
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "1"
  ThemeSetUP.style.bottom = "0px"
  ThemeSetUP.style.zIndex = "3";
  document.getElementById('MainBottomNavbar').style.zIndex = "24";
  document.getElementById("BGThemeFoc").style.width = "100%"
  // document.body.style.overflow = "hidden"
}

function ThemeCloseCheck() {
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("BGThemeFoc").style.width = "0%"
  document.body.style.overflow = "scroll"
}

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