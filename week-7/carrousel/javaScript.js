let carrousel = document.getElementById('carrousel')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const elementsArray = [carrousel, leftArrow, rightArrow]
const arrowArray = [leftArrow, rightArrow]
let volgendIndex = 0
let oudeIndex = 2
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

        newImg.src = imageTag[volgendIndex].src
        for (let i = 0; i < imageTag.length; i++) {
            imageTag[i].style.transform += "translateX(-760px)";
            imageTag[i].style.transition += "all 1s ease";
        }
        carrousel.appendChild(newImg)
        let x = volgendIndex + 1
        x = 760 * x
        newImg.style.transform += `translateX(${-x}px)`
        volgendIndex += 1

    } else {

        newImg.src = imageTag[oudeIndex].src
        carrousel.insertBefore(newImg, imageTag[0])
        let y = terugIndex + 1
        y = 760 * y
        newImg.style.transform += `translateX(${y}px)`
        newImg.style.transform += "all 1s ease";
        for (let i = 0 ; i < imageTag.length; i--) {
            imageTag[i].style.transform += "translateX(760px)";
            imageTag[i].style.transition += "all 1s ease";
        }
        oudeIndex -= 1
        terugIndex += 1
        volgendIndex += 1
        if (oudeIndex == 0) oudeIndex = 2
        
    }
}
arrowArray.forEach(arrow => {
    arrow.addEventListener('click', change)
})





