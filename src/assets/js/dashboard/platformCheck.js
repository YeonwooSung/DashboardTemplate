function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    var isMobile =  toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });

    if (isMobile) {
        //TODO
        resizeLogo('main-logo');
        resizeLogo('dashboard-sidebar-logo-img');
        // removeLogo('header-logo-img-container');
        // removeLogo('main-sidebar-logo-link');
    }

    return isMobile;
}

function removeLogo(id) {
    var div1 = document.getElementById(id);
    div1.removeChild(div1.firstChild);
}

function resizeLogo(id) {
    var img = document.getElementById(id);
    img.style.height = '0px';
    img.style.width = '0px';
}
