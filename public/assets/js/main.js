const organisingTeam = [
    {
        name: "Nelson Muthu",
        post: "Faculty Advisor",
        imgSrc: "assets/img/team/nelson.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Sukomal Dey",
        post: "Faculty Advisor",
        imgSrc: "assets/img/team/sukomel_dey.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Dr. Selva Pandian",
        post: "Industry Liaison Officer",
        imgSrc: "assets/img/team/silvon.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Prabhat Suresh",
        post: "Outreach Coordinator",
        imgSrc: "assets/img/team/prabhat_suresh.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Juvvala Revanth",
        post: "Finance Coordinator",
        imgSrc: "assets/img/team/revanth.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Amal Krishnan K",
        post: "Hospitality Coordinator",
        imgSrc: "assets/img/team/amal_krishnan.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Aryan Mathur",
        post: "Technical Coordinator",
        imgSrc: "assets/img/team/aryan_mathur.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Zeeshan Rangrej",
        post: "Backend Developer",
        imgSrc: "assets/img/team/zeeshan.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Karthikeya B",
        post: "Logistics & Marketing Coordinator",
        imgSrc: "assets/img/team/karthikeya.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Sarath A",
        post: "Content and Design Coordinator",
        imgSrc: "assets/img/team/sarath.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Devraj Doley",
        post: "Design Coordinator",
        imgSrc: "assets/img/team/devraj.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Muhamed Rizwan Mehaboob",
        post: "Event Coverage Coordinator",
        imgSrc: "assets/img/team/rizwan.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Sai Hemanth Reddy",
        post: "Academic Affairs Secretary",
        imgSrc: "assets/img/team/hemath_reddy.png",
        linkedin: "https://www.linkedin.com/in/"
    }
]

const departmentCoordinators = [
    {
        name: "Jasine Babu",
        post: "Computer Science and Engineering",
        imgSrc: "assets/img/team/jasine.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Satyajit Das",
        post: "Data Science and Engineering",
        imgSrc: "assets/img/team/satyajit.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Sreenath V",
        post: "Electrical Engineering",
        imgSrc: "assets/img/team/sreenathV.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Kanmani Subu S.",
        post: "Mechanical Engineering",
        imgSrc: "assets/img/team/subu.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Dr. Sarmistha Singh",
        post: "Civil Engineering",
        imgSrc: "assets/img/team/civil.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Vishwas V.",
        post: "Physics",
        imgSrc: "assets/img/team/vishwas.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Jaikrishnan Janardhanan",
        post: "Mathematics",
        imgSrc: "assets/img/team/jaikrishnan.png",
        linkedin: "https://www.linkedin.com/in/"
    },
    {
        name: "Yuvraj K.",
        post: "Chemistry",
        imgSrc: "assets/img/team/yuvraj.png",
        linkedin: "https://www.linkedin.com/in/"
    },
]

// organisingTeam


function loadImages() {
    const organisingTeamContainer = document.getElementById('organizing-team');
    organisingTeam.forEach(data => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
        colDiv.innerHTML = `
            <div class="image-container">
                <img src="${data.imgSrc}" class="img-fluid" alt="${data.name}">
                <div class="overlay">
                    <div class="text">
                        <h5>${data.name}</h5>
                        <p>${data.post}</p>
                        <!-- <a href="${data.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a> -->
                    </div>
                </div>
            </div>
        `;
        organisingTeamContainer.appendChild(colDiv);
    });

    const departmentCoordinatorsContainer = document.getElementById('department-cordinators');
    departmentCoordinators.forEach(data => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
        colDiv.innerHTML = `
            <div class="image-container">
                <img src="${data.imgSrc}" class="img-fluid" alt="${data.name}">
                <div class="overlay">
                    <div class="text">
                        <h5>${data.name}</h5>
                        <p>${data.post}</p>
                        <!-- <a href="${data.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a> -->
                    </div>
                </div>
            </div>
        `;
        departmentCoordinatorsContainer.appendChild(colDiv);
    });
}

// Load images when the webpage loads
window.onload = loadImages;

const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 35
      }
    }
  });

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
