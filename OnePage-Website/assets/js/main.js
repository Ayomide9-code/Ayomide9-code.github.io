// //  dark-mode

// function darkmode() {
//     document.getElementById('themestyle').setAttribute('href', '/assets/dark.css');
//     document.getElementById('toggle').className = 'fa-solid fa-toggle-off toggleon';
//     document.getElementById('topblack').src = '/assets/img/shape-top-black-80.png';
//     document.getElementById('topdarkgray').src = '/assets/img/shape-top-dark-grey-80.png';
//     document.getElementById('topdarkgrey2').src = '/assets/img/shape-top-dark-grey-80.png';
// }

// // light-mode

// function lightmode() {
//     document.getElementById('themestyle').setAttribute('href', '/assets/light.css');
//     document.getElementById('toggle').className = "fa-solid fa-toggle-off toggleon";
//     document.getElementById('topblack').src = '/assets/img/shape-top-white-80.png';
//     document.getElementById('topdarkgray').src = '/assets/img/shape-top-grey-80.png';
//     document.getElementById('topdarkgrey2').src = '/assets/img/shape-top-grey-80.png';
// }


// Dark-mode
function toggleMode() {
    const themelink = document.getElementById('theme');
    const toggleIcon = document.getElementById('toggle');
    const topBlack = document.getElementById('topblack');
    const topDarkGray = document.getElementById('topdarkgray');
    const topDarkGrey2 = document.getElementById('topdarkgrey2');

    if (themelink.getAttribute('href') === 'assets/light.css') {
        // switch to Dark mode
        themelink.setAttribute('href', 'assets/dark.css');
        toggleIcon.className = "fa-solid fa-toggle-off toggleon";
        topBlack.src = 'assets/img/shape-top-black-80.png';
        topDarkGray.src = 'assets/img/shape-top-dark-grey-80.png';
        topDarkGrey2.src = 'assets/img/shape-top-dark-grey-80.png';
    } else {
        // switch to light mode
        themelink.setAttribute('href', 'assets/light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        topBlack.src = 'assets/img/shape-top-white-80.png';
        topDarkGray.src = 'assets/img/shape-top-grey-80.png';
        topDarkGrey2.src = 'assets/img/shape-top-grey-80.png';
    } 
}




window.onscroll = function () {
    const scrollTopBtn = document.getElementById("srollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block"
    }
    else {
        scrollTopBtn.style.display = "none"
    }
};

document.getElementById("scrollTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};





