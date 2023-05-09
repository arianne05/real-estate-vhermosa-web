//hide-scroll bar
function hidescroll(){
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.topbar');
        if (window.scrollY > 0) {
            navbar.classList.add('scroll');
        } else {
            navbar.classList.remove('scroll');
        }
        });
}

//closing modal
function closeModal() {
    document.getElementById("myModal_1st_card").style.display = "none";
}

//opening modal
function openModal() {
    var modal = document.getElementById("myModal_1st_card");
    var btn = document.getElementById("myBtn_1st_card");
    var span = document.getElementsByClassName("close_1st_card")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

//opening modal2
function openModal2() {
    var modal = document.getElementById("myModal_2nd_card");
    var btn = document.getElementById("myBtn_2nd_card");
    var span = document.getElementsByClassName("close_2nd_card")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

//opening modal3
function openModal3() {
    var modal = document.getElementById("myModal_3rd_card");
    var btn = document.getElementById("myBtn_3rd_card");
    var span = document.getElementsByClassName("close_3rd_card")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

//modal slideshow
function myModalSlide(){
    var slideshow = document.getElementById("slideshow");
    var images = slideshow.getElementsByTagName("img");
    var currentIndex = 0;

    function nextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
    }

    setInterval(nextImage, 3000);
}

//section transistion on scroll
function myTransition(){
    const section = document.querySelector('.fourth-main-section');
const sectionPosition = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  if (sectionPosition < windowHeight / 2) {
    section.classList.add('visible');
  } else {
    section.classList.remove('visible');
  }
});
}