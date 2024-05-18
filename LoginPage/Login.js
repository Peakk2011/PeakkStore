var Content = document.getElementById('Content');

function OpenAnotherLinksUser() {
    var Content = document.getElementById('Content');
    Content.classList.add('AddClassAnimationExit');
    setTimeout(function () {
        window.open("NameImform.html", "_parent");
        Content.classList.remove("AddClassAnimationExit");
    }, 400);
}

function OpenAnotherLinksPass() {
    var Content = document.getElementById('Content');
    Content.classList.add('AddClassAnimationExit');
    setTimeout(function () {
        window.open("password.html", "_parent");
        Content.classList.remove("AddClassAnimationExit");
    }, 400);
}
