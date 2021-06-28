const easy = document.createElement('button')
easy.classList.add('buttons')
easy.innerHTML = 'Easy'
const normal = document.createElement('button')
normal.classList.add('buttons')
normal.innerHTML = 'Normal'
const hard = document.createElement('button')
hard.classList.add('buttons')
hard.innerHTML = 'Hard'
document.getElementById('container').appendChild(easy)
document.getElementById('container').appendChild(normal)
document.getElementById('container').appendChild(hard)
const gameDiv = document.createElement('div')
gameDiv.id = 'gameDiv'
const levelTitle = document.createElement('h2')
levelTitle.style.paddingTop = '10px'
levelTitle.style.marginBottom = '30px'
let quesArray = [true]
let correctAnt = [0]
let time = 0
let time2 = 0
let currentQues = 1
let resultP = document.createElement('p')
let quesText = document.createElement('h2')
quesText.classList.add('ques-style')
let d = document.createElement('div')
let quesNumber = document.createElement('h4')
quesNumber.classList.add('ques-nummer')
let timeP = document.createElement('p')
let btn2 = document.createElement('button')
let btn1 = document.createElement('button')
///////////////////////////////--Eerste HTML structure--/////////////////////////
const eersteHtml = () => {
    gameDiv.appendChild(quesText)
    quesText.classList.add('ques-style')
    gameDiv.appendChild(d)
    d.classList.add('ques-t')
}
//////////////////////////////--Start button Function--///////////////////////////
const startGame = (e) => {
    currentQues = 1
    if (resultP.innerHTML) gameDiv.removeChild(resultP)
    easy.style.display = 'none'
    normal.style.display = 'none'
    hard.style.display = 'none'
    gameBegin(e)
    eersteHtml()
    buttonsAdd()
    showQues()
}
/////////////////////////////////--Start button event--///////////////////////////
document.querySelectorAll('.buttons').forEach(btn => {
    btn.addEventListener('click', startGame)
})
/////////////////////////////////--Tweede HTML structure--////////////////////////
const gameBegin = (e) => {
    document.body.appendChild(gameDiv)
    gameDiv.appendChild(quesNumber)
    levelTitle.innerHTML = 'Math problem'
    levelTitle.classList.add('mm')
    gameDiv.appendChild(levelTitle)
    newGame(e.target.innerHTML)
}
/////////////////////////////////--Restart function--/////////////////////////////
const emptyVar = () => {
    quesArray = [true]
    correctAnt = [0]
    time = 0
    time2 = 0
}
/////////////////////////////////--Navigatieknoppen function--////////////////////
const buttonsAdd = () => {
    btn2.innerHTML = 'Terug'
    btn2.classList.add('move-btn')
    if (currentQues == 1) btn2.disabled = true
    gameDiv.appendChild(btn2)
    btn1.innerHTML = 'Volgende'
    btn1.classList.add('move-btn')
    gameDiv.appendChild(btn1)
}
btn2.addEventListener('click', function () {
    currentQues -= 1
    timer(true, false)
    if (currentQues == 1) btn2.disabled = true
})
btn1.addEventListener('click', function () {
    if (currentQues == quesArray.length - 1) eindResult()
    btn2.disabled = false
    currentQues += 1
    timer(true, false)
})
//////////////////////////////--Einde resultaat--/////////////////////////////////
const eindResult = () => {
    gameDiv.innerHTML = ''
    quesText.innerHTML = ''
    resultP.innerHTML = `gefeliciteerd je hebt ${correctAnt[0]} uit ${quesArray.length - 1} goed`
    gameDiv.append(resultP)
    easy.style.display = 'block'
    normal.style.display = 'block'
    hard.style.display = 'block'
    emptyVar()
}
//////////////////////////////--Bepalen aantal vragen--//////////////////////////
const newGame = (level) => {
    console.log(level)
    quesCount = randomNummer(9, 5)
    time = level == 'Easy' ? 11000 : level == 'Normal' ? 8000 : 5000
    time2 = time / 1000
    quesMaken(quesCount)
}
////////////////////////////--Willekeurig nummers generating--////////////////////
const randomNummer = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
}
/////////////////////////////////--Start button event--///////////////////////////
const quesMaken = l => {
    for (let i = 1; i <= l; i++) {
        quesArray.push(newQues())
    }
}
//////////////////////////////--Willekeurig vraag maken--/////////////////////////
const newQues = () => {
    num1 = randomNummer(99, 20)
    num2 = randomNummer(50, 15)
    num3 = num1 == num2 ? 0 : num1 - num2
    let ques = []
    ques.length = 6
    ques[0] = `${num1} - ${num2}`
    let ind = randomNummer(5, 1)
    ques[ind] = num3
    correctAnt.push(ind)
    for (let i = 1; i < ques.length; i++) {
        if (!ques[i]) {
            let rN = randomNummer(99, 20) - randomNummer(70, 15)
            ques[i] = rN == num3 ? rN + 1 : rN
        }
    }
    return ques
}
///////////////////////--Derde HTML structure(Vraag weergeven)--//////////////////
const showQues = () => {
    eersteHtml()
    quesNumber.innerHTML = `${currentQues} / ${quesArray.length - 1}`
    let cQ = quesArray[currentQues]
    for (let i = 0; i < 6; i++) {
        if (i == 0) quesText.innerHTML = `what is ${cQ[0]}`
        else {
            let qDiv = document.createElement('h4')
            qDiv.classList.add('q-div')
            let quesLabel = document.createElement('p')
            quesLabel.classList.add('label-num')
            quesLabel.innerHTML = i
            let a = document.createElement('button')
            a.innerHTML = cQ[i]
            if (cQ[6] == false) {
                if (a.innerHTML == cQ[7]) {
                    a.classList.add('wrong-button')
                    quesLabel.classList.add('wrong-button')
                }
                else if (a.innerHTML == cQ[8]) {
                    a.classList.add('right-button')
                    quesLabel.classList.add('right-button')
                }
            } else if (cQ[6] == true) {
                if (i == correctAnt[currentQues]) {
                    a.classList.add('right-button')
                    quesLabel.classList.add('right-button')
                }
            }
            a.classList.add('ant-btn')
            if (i % 2 == 0) {
                qDiv.appendChild(a)
                qDiv.appendChild(quesLabel)
                d.appendChild(qDiv)
            } else {
                a.classList.add('ant-btn2')
                qDiv.appendChild(quesLabel)
                qDiv.appendChild(a)
                d.appendChild(qDiv)
            }
            if (cQ.length > 6) a.disabled = true
            a.addEventListener('click', () => {
                if (i != correctAnt[currentQues]) {
                    a.classList.add('wrong-button')
                    quesLabel.classList.add('wrong-button')
                    quesArray[currentQues].push(false)
                    quesArray[currentQues].push(a.innerHTML)
                    let foutAnt = document.querySelectorAll('.ant-btn')
                    foutAnt.forEach((btn, index) => {
                        if (index + 1 == correctAnt[currentQues]) {
                            quesArray[currentQues].push(btn.innerHTML)
                            btn.style.background = 'green'
                            a.classList.add('right-button')
                            quesLabel.classList.add('right-button')
                            let labelFout = document.querySelectorAll('.label-num')
                            labelFout.forEach(l => {
                                if (l.innerHTML == index + 1) l.classList.add('right-button')
                            })
                        }
                    })
                } else {
                    quesArray[currentQues].push(true)
                    a.classList.add('right-button')
                    quesLabel.classList.add('right-button')
                    correctAnt[0] += 1
                }
            })
        }
        let foutAnt = document.querySelectorAll('.ant-btn')
        foutAnt.forEach(btn => {
            if (cQ.length > 6) btn.disabled = true
        })
    }
    gameDiv.appendChild(timeP)
    timer()

}
/////////////////////////////////--Tijd function--////////////////////////////////
function timer(check = false, intCheck = true) {
    function myFunction() {
        clearInterval(myVar)
        if (check == true) {
            time2 = time / 1000
            quesText.innerHTML = ''
            d.innerHTML = ''
            showQues()
        } 
        timeP.innerHTML = '--'
    }
    const tt = () => {
        time2 -= 1
        if (time2 == 0) {
            myFunction()
            quesArray[currentQues][6] = true
            let foutAnt = document.querySelectorAll('.ant-btn')
            foutAnt.forEach((btn, index) => {
                if (index + 1 == correctAnt[currentQues]) {
                    quesArray[currentQues].push(btn.innerHTML)
                    btn.style.background = 'green'
                    btn.disabled = true
                    quesLabel.classList.add('right-button')
                    let labelFout = document.querySelectorAll('.label-num')
                    labelFout.forEach(l => {
                        if (l.innerHTML == index + 1) l.classList.add('right-button')
                    })
                }
            })
        }
        if (quesArray[currentQues].length <= 6) {
            timeP.innerHTML = time2
            timeP.classList.add('timer')  
        } else timeP.innerHTML = '--'
    }
    if (intCheck) myVar = setInterval(tt, 1000);
    else myFunction()
}
