<<<<<<< HEAD

=======
const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector("#logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu_icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  if (menuIcon.classList.contains("ri-menu-fill")) {
    menuIcon.classList.remove("ri-menu-fill");
    menuIcon.classList.add("ri-close-fill");
    navbar.classList.add("active")
  } else {
    menuIcon.classList.remove("ri-close-fill");
    menuIcon.classList.add("ri-menu-fill");
    navbar.classList.remove("active")
  }
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars_box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  navbar.classList.remove("active")
  menuIcon.classList.add("ri-menu-fill");
};

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();

      link.classList.add("active");

      setTimeout(() => {
        sections[index].classList.add("active");
      }, 1100);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) activePage();

  navLinks[0].classList.add("active");

  setTimeout(() => {
    sections[0].classList.add("active");
  }, 1100);
});

const resumeBtns = document.querySelectorAll(".resume_btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume_detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowLeft = document.querySelector(
  ".project_box .navigation .arrow_left"
);
const arrowRight = document.querySelector(
  ".project_box .navigation .arrow_right"
);

let index = 0;

const activeProject = () => {
  const imgSlide = document.querySelector(".project_carousel .img_slide");
  const projectDetails = document.querySelectorAll(".project_detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  projectDetails.forEach((detail) => {
    detail.classList.remove("active");
  });

  projectDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 5;
    arrowRight.classList.add("disabled");
  }

  activeProject();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }

  activeProject();
});
>>>>>>> 28f8ca0 (Your commit message here)
