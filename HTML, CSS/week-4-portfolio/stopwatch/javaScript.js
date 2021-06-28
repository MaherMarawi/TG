const start = document.getElementById('start-btn')
const pause = document.getElementById('pause-btn')
const stop = document.getElementById('stop-btn')
let ms = 0
let s = 0 ;
let m = 0;
let startCount = () => {
    start.disabled = true
    let x = setInterval(function () {
        ms += 1
        if (ms == 100) {
            ms = 0
            s += 1;
            if(s == 60) {
                s = 0
                m += 1
            }
        }
        document.getElementById('stopwatch-body').classList.add('glowing-border')
        document.getElementById('milli-seconds').innerHTML = ms < 10 ? `0${ms}` : ms
        document.getElementById('seconds').innerHTML = s < 10 ? `0${s}` : s
        document.getElementById('minutes').innerHTML = m < 10 ? `0${m}` : m
    }, 10)
    let pauseCount = () => {
        start.disabled = false
        clearInterval(x)
        document.getElementById('stopwatch-body').classList.remove('glowing-border')
    }
    let stopCount = () => {
        start.disabled = false
        clearInterval(x)
        ms = s = m = 0
        document.getElementById('stopwatch-body').classList.remove('glowing-border')
        document.getElementById('milli-seconds').innerHTML = '00'
        document.getElementById('seconds').innerHTML ='00'
        document.getElementById('minutes').innerHTML = '00'
    }
    pause.addEventListener('click', pauseCount)
    stop.addEventListener('click', stopCount)
}
start.addEventListener('click', startCount)