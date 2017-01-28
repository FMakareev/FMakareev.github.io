var navItem = document.querySelectorAll(".nav-item");
var btn = document.querySelector(".nav-burger");
var rad2deg = 360 / Math.PI;
var a = 360 / 5
var deg = 90;
var i = 0;

function menuToogle() {
    btn.classList.toggle("active");
    btn.removeEventListener("click", menuToogle);
    if (btn.classList.contains("active")) {
        i = 0
        var animOpen = setInterval(function () {
            deg = i * 120;
            navItem[i].style.opacity = 1;
            navItem[i].style.top = -Math.sin(deg / rad2deg) * 41 + 41 + '%';
            navItem[i].style.bottom = Math.sin(deg / rad2deg) * 41 + 41 + '%';
            navItem[i].style.left = Math.cos((360 - deg) / rad2deg) * 41 + 41 + '%';
            navItem[i].style.right = -Math.cos((360 - deg) / rad2deg) * 41 + 41 + '%';
            i += 1;
            if (i > 5) {
                clearInterval(animOpen);
                btn.addEventListener("click", menuToogle);
                return
            }
        }, 100)
    } else {
        i = 5
        var animClose = setInterval(function () {
            deg = i * 120;
            navItem[i].style.opacity = 0;
            navItem[i].style.top = 0;
            navItem[i].style.bottom = 0;
            navItem[i].style.left = 0;
            navItem[i].style.right = 0;
            i -= 1;
            if (i < 0) {
                clearInterval(animClose);
                btn.addEventListener("click", menuToogle);
                return
            }
        }, 100)
    }
}

btn.addEventListener("click", menuToogle);
