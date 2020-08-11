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

    var isMobile = toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });

    if (!isMobile) {
        changePaddingSize('logoContainer', '10px', '20px');
    }

    return isMobile;
}

function changePaddingSize(id, paddingTopSize, paddingBottomSize) {
    var element = document.getElementById(id);

    if (paddingTopSize) element.style.paddingTop = paddingTopSize;

    if (paddingBottomSize) element.style.paddingBottom = paddingBottomSize;
}
