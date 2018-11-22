(function () {
    const carousel = document.querySelector('.carousel'),
        inner = document.querySelector('.carousel__inner'),
        prev = document.querySelector('.carousel__prev'),
        next = document.querySelector('.carousel__next'),
        images = document.querySelectorAll('img'),
        bubblesContainer = document.querySelector('.carousel__bubbles'),
        width = 640;
    let currentIndex = 0;

    const switchImg = () => {
        inner.style.left = -width * currentIndex + 'px';
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach((b, i) => {
            if (i === currentIndex) {
                b.classList.add('active')
            } else {
                b.classList.remove('active')
            }
        })
    }

    images.forEach((img, i) => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubblesContainer.appendChild(bubble);
        bubble.addEventListener('click', () => {
            currentIndex = i;
            switchImg()
        })
    })

    prev.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        switchImg()
    })

    next.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        switchImg()
    })
    
    switchImg()



    
    // swiped-left
    
    document.addEventListener('swiped-left', function(e) {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    switchImg()
    });
    
     
    
    // swiped-right
    
    document.addEventListener('swiped-right', function(e) {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        switchImg() 
    });
    
     


})()