const slider = document.getElementById("slider");
const btn = document.querySelector(".slider-button");
let bg = document.querySelector(".foreground-img")
slider.oninput=(e)=>{
    const sliderPos = e.target.value;
    console.log(sliderPos);

    bg.style.width = sliderPos + "%";
    btn.style.left = sliderPos -2 + "%";
    console.log(bg.style.width);
    document.getElementByClassName("slider-button").css('left', `calc(${sliderPos}% - 18px)`)
  };
  console.log("yes")