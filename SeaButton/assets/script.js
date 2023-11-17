let paragraphe = document.querySelector("#paragraphe");
let seaButton = document.querySelector("#sea-button");
let arrow = document.querySelector(".gg-arrow-right");
let sea1 = document.querySelector("#sea1");
let sea2 = document.querySelector("#sea2");
let sea3 = document.querySelector("#sea3");
let sea4 = document.querySelector("#sea4");

seaButton.addEventListener("mouseover", function () {
  paragraphe.style.color = "white";
  paragraphe.style.transition = "color 0.5s ease";

  sea1.style.top = "-25%";
  sea2.style.top = "-25%";
  sea3.style.top = "-25%";
  sea4.style.top = "-25%";

  sea1.style.transition = "top 0.2s ease";
  sea2.style.transition = "top 0.4s ease";
  sea3.style.transition = "top 0.6s ease";
  sea4.style.transition = "top 0.8s ease";

  paragraphe.addEventListener("transitionend", function () {
    const charCount = paragraphe.innerText.length;
    
    let value = 28 - charCount;

    paragraphe.style.transform = `translateX(-${value}%)`;
    paragraphe.style.transition = 'transform 0.4s ease';
    arrow.style.opacity = "1";
    arrow.style.bottom = "0%";
  });
});

seaButton.addEventListener("mouseleave", function () {
  paragraphe.style.color = "#0505a9";
  paragraphe.style.transition = "color 0.5s ease";
  
  sea1.style.top = "100%";
  sea2.style.top = "100%";
  sea3.style.top = "100%";
  sea4.style.top = "100%";
  
  sea1.style.transition = "top 0.2s ease";
  sea2.style.transition = "top 0.4s ease";
  sea3.style.transition = "top 0.6s ease";
  sea4.style.transition = "top 0.8s ease";

  paragraphe.addEventListener("transitionend", function () {

    paragraphe.style.transform = "translateX(-50%)";
    paragraphe.style.transition = 'transform 0.4s ease';
    arrow.style.opacity = "0";
    arrow.style.bottom = "-100%";
  });
});
