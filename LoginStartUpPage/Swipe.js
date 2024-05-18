var Content = document.getElementById('Content');

function OpenAnotherLinksUser() {
    var Content = document.getElementById('Content');
    Content.classList.add('AddClassAnimationExit');
    setTimeout(function () {
        window.open("Username.html", "_parent");
        Content.classList.remove("AddClassAnimationExit");
    }, 400);
}

function OpenAnotherLinksPass() {
    var Content = document.getElementById('Content');
    Content.classList.add('AddClassAnimationExit');
    setTimeout(function () {
        window.open("passwordCheck.html", "_parent");
        Content.classList.remove("AddClassAnimationExit");
    }, 400);
}

function OpenAnotherLinksConPass() {
    var Content = document.getElementById('Content');
    Content.classList.add('AddClassAnimationExit');
    setTimeout(function () {
        window.open("ConfirmPassCheck.html", "_parent");
    }, 400);
}