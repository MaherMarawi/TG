let group = document.querySelectorAll('.group')
let inp = document.querySelector('input')
let checkBtn = document.getElementById('check-btn')
let resetBtn = document.getElementById('reset-btn')
let fillBtn = document.getElementById('fill-btn')
let testBtn = document.getElementById('test-btn')
let resultSection = document.getElementById('final-result')
let arr = []
let rES = []
let rK = []
let rL = []
let arrTest = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
group.forEach(item => {
    item.addEventListener('keypress', (e) => {
        item.value = (e.keyCode >= 49 && e.keyCode <= 57) ? e.key : ""
        item.style.background = (e.keyCode >= 49 && e.keyCode <= 57) ? 'green' : 'rgb(148, 148, 148)'
        e.preventDefault()
    })
})
checkBtn.addEventListener('click', () => {
    check();
})
resetBtn.addEventListener('click', () => {
    group.forEach(item => {
        item.value = ''
        item.style.background = 'rgb(148, 148, 148)'
    })
    resultSection.innerHTML = ''
})
fillBtn.addEventListener('click', () => {
    // group.forEach(item => {
    //     item.value = arrTest[Math.floor(Math.random() * 9)] 
    //     item.style.background = 'rgb(148, 148, 148)'
    // })
    for (let i = 0; i < 20; i++) {
        let r = Math.floor(Math.random() * 81)
        group[r].value = sod[r]
    }
    
    // for (let i = 0; i < 9; i++) {
    //     let newArray = arrTest
    //     for (let j = 0; j < newArray.length; j++) {
    //         let c = Math.floor(Math.random() * newArray.length)
    //         group[c].value = newArray[c]
    //     }
    // }
})
// testBtn.addEventListener('click', () => {
//     let q = 0;
//     let m = false
//     while (m == false) {
//         group.forEach(item => {
//             item.value = arrTest[Math.floor(Math.random() * 9)]
//         })
//         q ++;
//         // console.log(q)
//         if (resultEachSquare() == true && resultKruislijnen() == true && resultLengtelijnen() == true) {
//             m = true
//         } else {
//             group.forEach(item => {
//                 item.value = ''
//             })
//             if (q > 1000) {
//                 break;
//             }
//         }
//     }
// })

function check() { // 
    arr = []
    rK = []
    rES = []
    group.forEach(item => {
        if (item.value) {
            arr.push(item.value)
        } else {
            item.style.background = 'red'
            setTimeout(() => {
                item.value = ''
                item.style.background = 'rgb(148, 148, 148)'
            }, 1000);
        }
        if (arr.length == 81) {
            // console.log(resultEachSquare())
            // console.log(resultKruislijnen())
            // console.log(resultLengtelijnen())
            // console.log(resultSection)
            resultSection.innerHTML = ''
            setTimeout(() => {
                if (resultEachSquare() === false || resultKruislijnen() === false || resultLengtelijnen() === false) {
                    resultSection.style.color = 'red'
                    resultSection.innerHTML = 'False'
                } else {
                    resultSection.style.color = 'green'
                    resultSection.innerHTML = 'True'
                }
            }, 500);
            
        }
    })
}
const resultEachSquare = () => { // Controleer de dozen
    let m = 0;
    let rr = [];
    console.log(arr)
    for (let i = 1; i <= 9; i++) {
        for (let j = m; j < m + 9; j++) {
            rr.push(arr[j]);
        }
        rr.sort()
        rES.push(JSON.stringify(rr) == JSON.stringify(arrTest) ? true : false)
        // console.log(rr)
        rr = []
        m += 9;
    }
    // console.log(rES)
    return resCheck(rES)
}

const resultKruislijnen = () => { // Controleer de kruislijnen
    let m = 0;
    let switchKey = true
    let rr = [];
    for (let i = 1; i <= 9; i++) {
        while (switchKey == true) {
            for (let j = m; j < m + 3; j++) {
                rr.push(arr[j]);
            }
            if (rr.length != 9) {
                m += 9
            }
            switchKey = rr.length == 9 ? false : true
        }
        rr.sort()
        rK.push(JSON.stringify(rr) == JSON.stringify(arrTest) ? true : false)
        // console.log(rK)
        rr = []
        switchKey = true
        if (rK.length == 3 || rK.length == 6) {
            m += 3;
        }
        else {
            m -= 15;
        }
    }
    return resCheck(rK)
}

const resultLengtelijnen = () => { // Controleer de lengtelijnen
    let m = 0;
    let switchKey = true
    let rr = [];
    for (let i = 1; i <= 9; i++) {
        while (switchKey == true) {
            for (let j = m; j < m + 7; j += 3) {
                rr.push(arr[j]);
            }
            if (rr.length != 9) {
                m += 27
            }
            switchKey = rr.length == 9 ? false : true
        }
        rr.sort()
        rL.push(JSON.stringify(rr) == JSON.stringify(arrTest) ? true : false)
        rr = []
        switchKey = true
        if (rL.length == 3 || rL.length == 6) {
            m -= 47;
        }
        else {
            m -= 53;
        }
    }
    return resCheck(rL)
}

let resCheck = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false) {
            return false
        } else {
            return true
        }
    }
}


const sod = [
    5,
    3,
    4,
    6,
    7,
    2,
    1,
    9,
    8,
    6,
    7,
    8,
    1,
    9,
    5,
    3,
    4,
    2,
    9,
    1,
    2,
    3,
    4,
    8,
    5,
    6,
    7,
    8,
    5,
    9,
    4,
    2,
    6,
    7,
    1,
    3,
    7,
    6,
    1,
    8,
    5,
    3,
    9,
    2,
    4,
    4,
    2,
    3,
    7,
    9,
    1,
    8,
    5,
    6,
    9,
    6,
    1,
    2,
    8,
    7,
    3,
    4,
    5,
    5,
    3,
    7,
    4,
    1,
    9,
    2,
    8,
    6,
    2,
    8,
    4,
    6,
    3,
    5,
    1,
    7,
    9
    ]