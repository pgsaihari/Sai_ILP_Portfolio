var typeData = new Typed(".role", {
  strings: [
    "Passionate,",
    "Web Developer",
   
    
    "React-developer",
    "NodeJs developer"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

function nav_expand() {
  document.querySelector(".nav_link").classList.toggle("expand");
};
function nav_close() {
  document.querySelector(".nav_link").classList.close("expand");
};




const form = document.querySelector(".main-contact-form");
const fullName = document.getElementById("input-name");
const email = document.getElementById("input-email");
const phone = document.getElementById("input-phone");
const subject = document.getElementById("input-subject");
const mess = document.getElementById("input-message");

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Ankit Raj";
  } else {
    document.title = "Please Come Back!";
  }
});

document.addEventListener('DOMContentLoaded', function () {
/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
sr.reveal(".main-content .main-content-text-text h1", { delay: 500 });
sr.reveal(".main-content button", { delay: 800 });
sr.reveal(".main-content .main-content-text-social", { delay: 700 });
sr.reveal(".main-content-image ", { delay: 400 });
sr.reveal(".main-content-text-social", { interval: 800 });

/* SCROLL ABOUT */
sr.reveal(".main-about-inner", { delay: 300 });
sr.reveal(".about .content h3", { delay: 300 });
sr.reveal(".about .content .tag", { delay: 400 });
sr.reveal(".about .content p", { delay: 300 });
sr.reveal(".about .content .box-container", { delay: 300 });
sr.reveal(".about .content .resumebtn", { delay: 300 });

/* SCROLL SKILLS */
sr.reveal(".main-skill-inner", { delay: 300 });

/* SCROLL PROJECTS */
sr.reveal(".main-project-inner", { delay: 200 });
sr.reveal(".main-project", { interval: 300 });

/* SCROLL EXPERIENCE */
sr.reveal(".main-work", { delay: 400 });
sr.reveal(".main-work-div", { delay: 600 });
/* SCROLL CONTACT */
sr.reveal(".main-contact h2", { delay: 400 });
sr.reveal(".contact form", { delay: 400 });
sr.reveal(".contact form input, .input-div i", { delay: 500 });
sr.reveal(".contact form textarea", { delay: 500 });


});

VanillaTilt.init(document.querySelector(".main-content-image"), {
  max: 10,
  speed: 200,
  glare: false,
  "max-glare": 0.5,
});

        // document.addEventListener("selectstart", function(event) {
        //     event.preventDefault();
        // });

        // document.addEventListener("dragstart", function(event) {
        //     if (event.target.tagName.toLowerCase() === "img") {
        //         event.preventDefault();
        //     }
        // });

        // document.addEventListener("keydown", function(event) {
        //     if (event.ctrlKey || event.metaKey) {
        //         event.preventDefault();
        //     }
        // });

        // if (top !== self) {
        //     top.location.replace(self.location.href);
        // }

        