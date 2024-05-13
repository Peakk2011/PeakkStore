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

function BeginNavHid() {
    document.getElementById('MainNavSideOFF').style.display = ('none')
  }
  
BeginNavHid()