// стартовое значение
var start = 1, // первая цифра
    score = 0, // счет
    mSec = 60, // кол-во милли секунд
    sec = 59, // кол-во секунд
    highscore = 0, 
    lengthArr = 70; // кол-во ячеек
// игровое поле
var scoreBlock = document.getElementById("score_num"), // поле счета
    counterBlock = document.getElementById("time_title"), // поле таймера
    gameBoard = document.getElementById("game_board"), // игровая доска
    btnStart = document.getElementById("btn__start"), // кнопка запуска
    gamePageStart = document.getElementById("game__page-start"), // экран старта
    gamePageRestart = document.getElementById("game__page-restart"), // экран перезагрузки
    btnRestart = document.getElementById("btn__restart"), // кнопка перезагрузки
    highScoreBlock = document.getElementById("highscore"),
    finalScoreBlock = document.getElementById("finalscore"),
    finalTimeBlock = document.getElementById("finaltime");

// пустой массив
var arr = [];
// инициализация массива

// проверка наличия локального хранилища
function localStor() {
    if (null == localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', 0);
    }
}
localStor();
// инициализация игрового поля
function create() {
    // наполнение массива
    for (var i = 1; i <= lengthArr; i++) {
        arr.push(i)
    }
    // перемешивание массива
    arr.sort(function () {
        return 0.5 - Math.random()
    });
    // Наполнение игрового поля
    for (var i = 0; i < lengthArr; i++) {
        // создаем элемент
        var elem = document.createElement('div');
        // помещаем цифру
        elem.innerHTML = arr[i];
        // помещаем на игровое поле
        gameBoard.appendChild(elem);
        elem.addEventListener("click", valid);
    }
}
// сброс игрового поля и всех счетчиков
function clear() {
    if (gameBoard != null) {
        if (gameBoard.childNodes) {
            while (gameBoard.childNodes[0]) {
                gameBoard.removeChild(gameBoard.childNodes[0]);
            }
        }
    }
    arr = [];
    score = 0;
    mSec = 60;
    sec = 59;
    start = 1;
}
// проверка 
function valid(e) {
    var that = e.target,
        targetValue = that.innerHTML;
    if (targetValue == start) {
        that.style.background = "#2C3E50";
        that.style.pointerEvents = "none";
        start += 1;
        score += 1;
        scoreBlock.innerHTML = score;
    } else {
        scoreTable();
    }
}
// Таймер
var counterGame = function () {
    mSec -= 1;
    counterBlock.innerHTML = ("Time: " + sec + "." + mSec + "s");
    if (mSec == 0) {
        sec -= 1;
        mSec = 60;
        if (sec == 0) {
            mSec = 0;
            scoreTable();
        }
    }
    return timout = setTimeout(counterGame, 1000 / 60);
};
// конец игры
function scoreTable() {
    clearTimeout(timout);
    highscore = localStorage.getItem('highscore');
    if (score > highscore) {
        localStorage.setItem('highscore', score);
    }
    highScoreBlock.innerHTML = localStorage.getItem('highscore');
    finalScoreBlock.innerHTML = score;
    finalTimeBlock.innerHTML = (sec + "." + mSec + "s");
    gamePageRestart.style.display = "block";
    clear();
}
// запуск игры
btnStart.addEventListener("click", function () {
    create();
    gamePageStart.style.display = "none";
    counterGame();
})
// перезапуск игры
btnRestart.addEventListener("click", function () {
    create();
    gamePageRestart.style.display = "none";
    counterGame();
})
