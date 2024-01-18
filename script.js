let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    document.getElementById(`slide${slideIndex}`).style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}


//document.querySelector('.more').addEventListener('click', function() {
    //var displayText = document.querySelector('.moreText');
    document.querySelectorAll('.more').forEach(function(button) {
        button.addEventListener('click', function() {
          // Get the target paragraph id from the data-target attribute
          var targetId = this.getAttribute('data-target');
      
          // Toggle the display of the target paragraph
          var displayText = document.getElementById(targetId);
          var left = this.querySelector('.leftText_copy');
          var right = this.querySelector('.rightText_copy');
          var left1 = this.querySelector('.leftText');
          var right1 = this.querySelector('.rightText');
    if (displayText.style.display === 'none' || getComputedStyle(displayText).display === 'none') {
        displayText.style.display = 'flex';
        displayText.style.backgroundColor = 'rgb(39, 37, 37)';
        displayText.style.justifyContent = 'center';
        displayText.style.alignItems = 'center';
        displayText.style.width = '100%';
        displayText.style.maxWidth = '900px';
        displayText.style.height = 'auto';
        displayText.style.padding = '10px 30px';
        displayText.style.fontSize = 'clamp(10px,25px,20px);';
        displayText.style.letterSpacing = '1.5px';
        displayText.style.lineHeight = '30px';
        left.style.display = 'flex';
        right.style.display = 'flex';
        left1.style.display = 'none';
        right1.style.display = 'none';
    } else {
      displayText.style.display = 'none';
      left.style.display = 'none';
      right.style.display = 'none';
      left1.style.display = 'flex';
      right1.style.display = 'flex';
      right1.style.flex = '1';
      right1.style.justifyContent = 'flex-end';
    }
  });

});
  