var Util = {
    PosTop: function (elem) {
        return parseInt(getComputedStyle(elem).top, 10)
    },
    PosLeft: function (elem) {
        return parseInt(getComputedStyle(elem).left, 10)
    },
    PosBottom: function (elem) {
        return parseInt(getComputedStyle(elem).bottom, 10)
    },
    Random: function (elem) {
        return parseInt(Math.random() * elem, 10)
    }
}

var Timers = {
    fps: 60,
    _ShellFlyRender: function () {
        var ShellFlyRender = setTimeout(function () {
            if (GameBord.play == false) {
                clearTimeout(ShellFlyRender);
                return
            }
            requestAnimationFrame(Timers._ShellFlyRender);
            Player._FlyShell();
            Ufo._FlyUfoShell();
        }, 100 / Timers.fps);

    },
    _DelayFire: function () {
        var DelayFire = setTimeout(function () {
            if (GameBord.play == false) {
                clearTimeout(DelayFire);
                return
            }
            Player.fire = true;

        }, 1000);
    },
    _DelayFireUfo: function () {
        var DelayFireUfo = setTimeout(function () {
            if (GameBord.play == false) {
                clearTimeout(DelayFireUfo);
                return
            }
            Ufo.statusFire = true;

        }, 2000);
    },
    _UfoMoveRender: function () {
        var UfoMoveRender = setInterval(function () {
            if (GameBord.play == false) {
                clearInterval(UfoMoveRender);
                return
            }

            Ufo._UfoMove();
            Ufo._UfoFire();

        }, 1000)
    }
}

var GameBord = {
    canvas: document.getElementById("canvas"),
    scoreBlock: document.getElementById("score"),
    livesBlock: document.getElementById("lives"),
    menuStart: document.getElementById("menu__start"),
    menuEnd: document.getElementById("menu__end"),
    lives: 3,
    score: 0,
    play: false,
    _addScore: function (elem) {       
        if(elem.classList.contains("ufo__strong")){
            this.score += 40;
        }else if(elem.classList.contains("ufo__middle")){
            this.score += 20;
        } else{
            this.score += 10;
        }
        
        document.querySelector("#menu__end .score").innerHTML = "Score = " + this.score;
        this.scoreBlock.innerHTML = this.score + "";
        if(this.score >= 1000){
            this._Stop();
        }

    },
    _addLives: function () {
        this.lives--;
        if (this.lives < 0) {
            this._Stop();
        }
        this.livesBlock.innerHTML = this.lives + "";
    },
    _start: function () {
        this.score = 0;
        this.lives = 3;
        Ufo.ufo_count = 55;
        this.livesBlock.innerHTML = this.lives + "";
        this.menuStart.classList.remove("active");
        this.menuEnd.classList.remove("active");
        Player._AddPlayer();
        Ufo.addUfo();
        GameBord.play = true;
        document.addEventListener("keydown", Player._UnitMove);
        
        Timers._ShellFlyRender();
        Timers._UfoMoveRender();
        Ufo._UfoMove();
    },
    _Stop: function () {
        GameBord.play = false;
        this.menuEnd.classList.add("active");
        this._ClearCanvas();
        document.removeEventListener("keydown", Player._UnitMove);
        Ufo.startTop = 100;
        Ufo.startLeft = 0;
        Ufo.statusFire = true;
        Ufo.validRow = false;
        Ufo.dir = "rtl";
    },
    _ClearCanvas: function () {
        if (this.canvas != null) {
            if (this.canvas.childNodes) {
                while (this.canvas.childNodes[0]) {
                    this.canvas.removeChild(this.canvas.childNodes[0]);
                }
            }
        }
    }
}

var Ufo = {
    wrap: document.getElementById("ufo__wrap"),
    class: ["ufo__1", "ufo__2", "ufo__3"],
    ufo_count: 55,
    ufoMoveMin: 45,
    ufoMoveMax: 165,
    dir: "rtl",
    validRow: false,
    startTop: 50,
    startLeft: 0,
    statusFire: true,
    addUfo: function () {
        var lengthRow = 10;
        var counter = 0;
        for (var i = 0; i < this.ufo_count; i++) {
            var ufo = document.createElement("div");
            ufo.classList.add("ufo");
            if (counter == lengthRow) {
                counter = 0;
                this.startTop = this.startTop + 40;
                this.startLeft = 0;
            } else {
                if (i >= 33) {
                    ufo.classList.add("ufo__low");
                } else if (i >= 11) {
                    ufo.classList.add("ufo__middle");
                } else {
                    ufo.classList.add("ufo__strong");
                }
                counter++;
                this.startLeft += 55;
                ufo.style.left = this.startLeft + "px";
                ufo.style.top = this.startTop + "px";
                GameBord.canvas.appendChild(ufo);
            }

        }
    },
    _UfoMove: function () {
        var Ufo_List = GameBord.canvas.querySelectorAll(".ufo");
        for (var i = 0; i < Ufo_List.length; i++) {
            var top = Util.PosTop(Ufo_List[i]);
            var left = Util.PosLeft(Ufo_List[i]);
            Ufo_List[i].classList.toggle("active");
            if (this.dir == "rtl") {
                left -= 5;
                Ufo_List[i].style.left = left + "px";
            }
            if (this.dir == "ltr") {
                left += 5;
                Ufo_List[i].style.left = left + "px";
            }

        }
        var RowSum = 0;
        for (var i = 0; i < 5; i++) {
            var left = Util.PosLeft(Ufo_List[RowSum]);
            if (left <= this.ufoMoveMin) {
                this.validRow = true;
                this.dir = "ltr";
            } else if (left >= this.ufoMoveMax) {
                this.validRow = true;
                this.dir = "rtl";
            } else {
                this.validRow = false;
            }
            RowSum += 10;
        }
        for (var i = 0; i < Ufo_List.length; i++) {
            var top = Util.PosTop(Ufo_List[i]);
            var left = Util.PosLeft(Ufo_List[i]);
            if (this.validRow) {
                Ufo_List[i].style.top = top + 10 + "px";
            }
        }
    },
    _UfoFire: function () {
        if (this.statusFire == true) {
            var Ufo_List = GameBord.canvas.querySelectorAll(".ufo");
            var FireReadyUfo = [];
            for (var i = 0; i < Ufo_List.length; i++) {
                var top = Ufo_List[i].getBoundingClientRect().top + 50;
                var left = Ufo_List[i].getBoundingClientRect().left;
                var elem = document.elementFromPoint(left, top);
                var ufoTop = Util.PosTop(Ufo_List[i]);
                var ufoLeft = Util.PosLeft(Ufo_List[i]);
                if (elem.classList.contains("destroy") || elem.hasAttribute("id")) {
                    if (Ufo_List[i].classList.contains("destroy")) continue
                    FireReadyUfo.push(i);
                }
            }
            var readyUfo = Util.Random(FireReadyUfo.length)
            var ufoTop = Util.PosTop(Ufo_List[FireReadyUfo[readyUfo]]);
            var ufoLeft = Util.PosLeft(Ufo_List[FireReadyUfo[readyUfo]]);
            var Ufo_Shell = document.createElement("div");
            Ufo_Shell.classList.add("shell__Ufo");
            Ufo_Shell.style.top = ufoTop + 35 + "px";
            Ufo_Shell.style.left = ufoLeft + (55 / 2 - 1) + "px";
            GameBord.canvas.appendChild(Ufo_Shell);
            this.statusFire == false;
            Timers._DelayFireUfo();
        }
    },
    _FlyUfoShell: function () {
        var Shell_List = GameBord.canvas.querySelectorAll(".shell__Ufo");
        for (var i = 0; i < Shell_List.length; i++) {
            Shell_List[i].style.top = Util.PosTop(Shell_List[i]) + 5 + "px";
            this._UfoShellValid();
        }
    },
    _UfoShellValid: function () {
        var Shell_List = GameBord.canvas.querySelectorAll(".shell__Ufo");

        for (var i = 0; i < Shell_List.length; i++) {
            var top = Util.PosTop(Shell_List[i]);
            var left = Util.PosLeft(Shell_List[i]);
            var PlayerTop = Util.PosTop(Player.unit);
            var PlayerLeft = Util.PosLeft(Player.unit);

            if (window.innerHeight <= top) {
                GameBord.canvas.removeChild(Shell_List[i]);
            }
            if (left > PlayerLeft && left < (PlayerLeft + 40) && top == PlayerTop) {                
                GameBord.canvas.removeChild(Shell_List[i]);
                GameBord._addLives()
            }
        }
    }
}

var Player = {
    unit: document.getElementById("player"),
    unitMoveMin: 50,
    unitMoveMax: 678,
    fire: true,
    _AddPlayer: function () {
        var player = document.createElement("div");
        player.setAttribute("id", "player");
        GameBord.canvas.appendChild(player);
        this.unit = document.getElementById("player");
    },
    _UnitMove: function (event) {
        var keyCode = event.keyCode;
        var currentPos = Util.PosLeft(Player.unit);
        // стрельба
        if (keyCode == 38) {
            Player._Shell();
        }
        // вправо
        if (keyCode == 39) {
            currentPos += 16;
            if (currentPos >= Player.unitMoveMax) {
                currentPos = Player.unitMoveMax;
            }
            Player.unit.style.left = currentPos + "px";
        }
        // влево
        if (keyCode == 37) {
            currentPos -= 16;
            if (currentPos <= Player.unitMoveMin) {
                currentPos = Player.unitMoveMin;
            }
            Player.unit.style.left = currentPos + "px";
        }

    },
    _Shell: function () {
        if (this.fire) {
            var shell = document.createElement("div");
            shell.classList.add("shell");
            shell.style.left = Util.PosLeft(this.unit) + (40 / 2 - 1) + "px";
            GameBord.canvas.appendChild(shell);
            this.fire = false;
            Timers._DelayFire();
        }
    },
    _FlyShell: function () {
        var Shell_List = GameBord.canvas.querySelectorAll(".shell");
        for (var i = 0; i < Shell_List.length; i++) {
            Shell_List[i].style.top = Util.PosTop(Shell_List[i]) - 5 + "px";
            this._ValidShell();
        }
    },
    _ValidShell: function () {
        var Shell_List = GameBord.canvas.querySelectorAll(".shell");
        var Ufo_List = GameBord.canvas.querySelectorAll(".ufo");

        for (var i = 0; i < Shell_List.length; i++) {
            var Shelltop = Shell_List[i].getBoundingClientRect().top;
            var Shellleft = Shell_List[i].getBoundingClientRect().left;
            if (Shelltop <= 0) {
                GameBord.canvas.removeChild(Shell_List[i]);
            }
            for (var a = 0; a < Ufo_List.length; a++) {
                var Ufotop = Ufo_List[a].getBoundingClientRect().top;
                var Ufoleft = Ufo_List[a].getBoundingClientRect().left;
                if (Shellleft > Ufoleft && (Ufoleft + 45) > Shellleft && Ufotop == Shelltop) {
                    if (Ufo_List[a].classList.contains("destroy")) continue
                    GameBord._addScore(Ufo_List[a]);
                    Ufo_List[a].classList.add("destroy");
                    GameBord.canvas.removeChild(Shell_List[i]);                    
                }
            }
        }
    }
}
