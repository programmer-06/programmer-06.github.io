function showhide() {
    var loginform = document.getElementById("form_container");
    if (loginform.style.opacity === "0") {
        loginform.style.opacity = "1";
    } else {
        loginform.style.opacity = "0";
    }
}

function scrollPageDown() {
    window.scrollBy(0, window.innerHeight);
  }

  function scrollPageUp() {
    window.scrollBy(0, -window.innerHeight);
  }


  document.addEventListener('DOMContentLoaded', function () {
    const galleryBoxes = document.querySelectorAll('.gallery .box img');
  
    function showFullscreenImage(imgSrc) {
      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('fullscreen');
  
      const img = document.createElement('img');
      img.setAttribute('src', imgSrc);
  
      const backButton = document.createElement('button');
      backButton.textContent = 'Back';
      backButton.addEventListener('click', () => {
        fullscreenDiv.remove();
      });
  
      const imageContainer = document.createElement('div');
      imageContainer.appendChild(img);
  
      fullscreenDiv.appendChild(imageContainer);
      fullscreenDiv.appendChild(backButton);
  
      document.body.appendChild(fullscreenDiv);
    }
  
    // Add click event listeners to each image in the gallery
    galleryBoxes.forEach((img) => {
      img.addEventListener('click', () => {
        const imgSrc = img.getAttribute('src');
        showFullscreenImage(imgSrc);
      });
    });
  });