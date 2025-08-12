document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.checkValidity()) {
        message.textContent = "Message sent successfully!";
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = "Please fill in all required fields.";
        message.style.color = "red";
      }
    });
  }

  // Banner image rotation
  const banner = document.querySelector(".hero .banner");
  if (banner) {
    const images = [
      "images/codecamp_kids_banner.png",
      "images/codecamp_kids_banner2.png",
      "images/codecamp_kids_banner3.png"
    ];

    let index = 0;
	setInterval(() => {
	banner.style.opacity = 0;
	setTimeout(() => {
    index = (index + 1) % images.length;
    banner.src = images[index];
    banner.style.opacity = 1;
  }, 300); // match the CSS transition timing
}, 3000); // change every 3 seconds
  }
});

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
