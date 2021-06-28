let carrousel = document.getElementById('carrousel')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')

const elementsArray = [carrousel, leftArrow, rightArrow]
const arrowArray = [leftArrow, rightArrow]
let mijnIndex = 0
let oudeIndex = 4
elementsArray.forEach(element => {
    element.addEventListener("mouseover", () => {
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'block'
    })
});
elementsArray.forEach(element => {
    element.addEventListener('mouseout', () => {
        leftArrow.style.display = 'none'
        rightArrow.style.display = 'none'
    })
});
let change = (e) => {
    let imageTag = document.querySelector('#carrousel').children
    let newImg = document.createElement('img')
    newImg.classList.add('carrousel-images')

    if (e.target.id == 'right-arrow') {

        newImg.src = imageTag[mijnIndex].src


        for (let i = 0; i < imageTag.length; i++) {
            imageTag[i].style.transform += "translateX(-690px)";
            imageTag[i].style.transition += "all 1s ease";


        }

        carrousel.appendChild(newImg)
        let x = mijnIndex + 1
        x = 690 * x 
        newImg.style.transform += `translateX(${-x}px)`


        // imageTag[imageTag.length].style.transform += "translateX(-690px)"
        // imageTag[imageTag.length].style.transition += "all 1s ease";
        mijnIndex += 1


    } else {


        // newImg.src = imageTag[oudeIndex].src
        // carrousel.insertBefore(newImg, imageTag[0])


        for (let i = imageTag.length - 1; i >= 0; i--) {
            imageTag[i].style.transform += "translateX(690px)";
            imageTag[i].style.transition += "all 2s ease";
        }

        oudeIndex -= 1
        mijnIndex += 1
        if (oudeIndex < 0) oudeIndex = 4
    }
}

arrowArray.forEach(arrow => {
    arrow.addEventListener('click', change)
})





