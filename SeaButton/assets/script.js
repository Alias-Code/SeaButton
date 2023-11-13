let paragraphe = document.querySelector("#paragraphe");
let blobButton = document.querySelector("#blob-button");
let arrow = document.querySelector(".gg-arrow-right");
let blob1 = document.querySelector("#blob1");
let blob2 = document.querySelector("#blob2");
let blob3 = document.querySelector("#blob3");
let blob4 = document.querySelector("#blob4");

blobButton.addEventListener("mouseover", function () {
  paragraphe.style.color = "white";
  paragraphe.style.transition = "color 0.5s ease";

  blob1.style.top = "-25%";
  blob4.style.top = "-25%";
  blob3.style.top = "-25%";
  blob2.style.top = "-25%";
  blob1.style.transition = "top 0.2s ease";
  blob2.style.transition = "top 0.4s ease";
  blob3.style.transition = "top 0.6s ease";
  blob4.style.transition = "top 0.8s ease";

  paragraphe.addEventListener("transitionend", function () {
    const charCount = paragraphe.innerText.length;
    
    let value = 30 - charCount;

    paragraphe.style.transform = `translateX(-${value}%)`;
    paragraphe.style.transition = 'transform 0.4s ease';
    arrow.style.opacity = "1";
    arrow.style.bottom = "8%";
  });
});

blobButton.addEventListener("mouseleave", function () {
  paragraphe.style.color = "#0505a9";
  paragraphe.style.transition = "color 0.5s ease";
  blob1.style.top = "100%";
  blob4.style.top = "100%";
  blob3.style.top = "100%";
  blob2.style.top = "100%";
  blob1.style.transition = "top 0.2s ease";
  blob2.style.transition = "top 0.4s ease";
  blob3.style.transition = "top 0.6s ease";
  blob4.style.transition = "top 0.8s ease";

  paragraphe.addEventListener("transitionend", function () {

    paragraphe.style.transform = "translateX(-50%)";
    paragraphe.style.transition = 'transform 0.4s ease';
    arrow.style.opacity = "0";
    arrow.style.bottom = "-100%";
  });
});
