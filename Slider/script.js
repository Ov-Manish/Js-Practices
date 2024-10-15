const initSlider=()=>{
    const ImageList= document.querySelector(".slider-wrapper .image-list")
    const slideButton= document.querySelectorAll(".slider-wrapper .slide-button")
    const sliderScroller=document.querySelector(".container .slide-scrollbar");
    const scrollbarThumb=sliderScroller.querySelector(".scrollbar-Thumb");
    const maxScrollLeft=ImageList.scrollWidth - ImageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown",(e)=>{
        const StartX=e.clientX;
        const thumbPosition=scrollbarThumb.offsetLeft;

        const handleMouseMove=(e)=>{
            const deltaX = e.clientX - StartX;
            const newThumbPosition=thumbPosition + deltaX;

            const maxThumbPostion =sliderScroller.getBoundingClientRect().width - scrollbarThumb.offsetWidth;


            const boundedPosition = Math.max(0,Math.min(maxThumbPostion,newThumbPosition));

            const scrollPosition =(boundedPosition / maxThumbPostion) * maxScrollLeft
            scrollbarThumb.style.left = `${boundedPosition}px`;
            ImageList.scrollLeft = scrollPosition
        }

        const handleMouseUp = ()=>{
            document.removeEventListener("mousemove",handleMouseMove)
            document.removeEventListener("mouseup",handleMouseUp)
        }
        document.addEventListener("mousemove",handleMouseMove)
        document.addEventListener("mouseup",handleMouseUp);
    })

    
    // Slide Image according to the slide clicks
    slideButton.forEach(button => {
        button.addEventListener("click",()=>{
            // console.log(button);
            const direction=button.id ==="prev-slide" ? -1 : 1;
            const ScrollAmount=ImageList.clientWidth * direction;
            ImageList.scrollBy({left : ScrollAmount, behavior :"smooth"})
        })
    })

    const handleSlideButtons = () =>{
        slideButton[0].style.display= ImageList.scrollLeft <= 0 ? "none" : "block";
        slideButton[1].style.display= ImageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition=()=>{
        const scrollPosition =ImageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) *(sliderScroller.clientWidth - scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left=`${thumbPosition}px`;
    }
    ImageList.addEventListener("scroll",()=>{
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}
window.addEventListener("load",initSlider)