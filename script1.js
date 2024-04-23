button = document.getElementById("button1")
button.onclick = function () {
    // button.style.backgroundColor = "yellow"
}

button2 = document.getElementById("button2")
thumbnailImg = document.getElementById("thumbnailImg")
button2.onclick = function () {
    button2.style.backgroundColor = "yellow"
    if (thumbnailImg.src == "https://raw.githubusercontent.com/linhnd99/Image2K/main/003.png") {
        thumbnailImg.src = "https://raw.githubusercontent.com/linhnd99/Image2K/main/002.png"
    } else {
        thumbnailImg.src = "https://raw.githubusercontent.com/linhnd99/Image2K/main/003.png"
    }

    button.style.boxShadow = "-20px -20px 5px 25px orange"
}

glowingAnimation = document.getElementById("glowing-animation")

button3 = document.getElementById("button3")
button3.onclick = function() {
    button2.style.backgroundColor = "orange"
    button2.style.visibility = "visible"
    button2.style.borderColor = "blue"
    button2.style.borderWidth = "20px"

    glowingAnimation.style.dataGlowingAnimationColor = "orange"
    glowingAnimation.style.dataGlowingAnimationTimingFunction = "linear"
    glowingAnimation.style.dataGlowingAnimationDuration = 1000
    glowingAnimation.style.borderColor = "blue"
    glowingAnimation.style.borderWidth = "20px"

    button.style.boxShadow = "-40px -40px 5px 25px blue"
}

buttonOpacity = document.getElementById("button-opacity")
buttonOpacity.onclick = function() {
    button2.style.backgroundColor = "green"
    button2.style.visibility = "hidden"
    button2.style.borderColor = "red"
    button2.style.borderWidth = "1px"
    
    glowingAnimation.style.dataGlowingAnimationColor = "blue"
    glowingAnimation.style.dataGlowingAnimationTimingFunction = "ease"
    glowingAnimation.style.dataGlowingAnimationDuration = 500
    glowingAnimation.style.borderColor = "red"
    glowingAnimation.style.borderWidth = "1px"
}
