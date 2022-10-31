let prevScrollpos = window.pageYOffset;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { // js gets called only on these devices
    window.onscroll = function() {
        let currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollpos;
    
    }
}