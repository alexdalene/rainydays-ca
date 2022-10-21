let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollpos;

}