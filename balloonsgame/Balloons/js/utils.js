function randomRanged(a, b) {
    return (Math.floor(Math.random() * (1 + b - a))) + a;
}

//Random acceleration speed
function randomNumRange(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function randomBackgroundImg(img) {
    var images = Array(1);

    images[0] = "/images/background_1.png";
    images[1] = "/images/background_2.png";
    images[2] = "/images/background_3.png";
    images[3] = "/images/background_2b.png";
    images[4] = "/images/background_3b.png";
    
    return images[img];
}

