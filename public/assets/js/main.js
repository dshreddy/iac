/**
* Template Name: TheEvent
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox
   */
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
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Buy tickets select the ticket type on click
   */
  on('show.bs.modal', '#buy-ticket-modal', function(event) {
    select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
  })

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

const speakers = {
  'sp2' : {
    'imgsrc' : 'https://siwinonline.com/wp-content/uploads/2021/09/Mr.-Sudish-.png',
    'speakername' : 'M S Sudish',
    'institution' : 'SIWIM',
    'linkedin' : 'https://www.linkedin.com/in/sudish-m-s-485ba617'
  },

  'sp3' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5103AQEr_pavz0Cgfg/profile-displayphoto-shrink_400_400/0/1579780011083?e=1699488000&v=beta&t=I6PKFzFCgT_0QuFs0u2tW9KN2XGO-7WfP0skvqfCo3g',
    'speakername' : 'Hussain Babu D',
    'institution' : 'Larsen & Toubro',
    'linkedin' : 'https://www.linkedin.com/in/hussain-babu-d-378998136/'
  },
  'sp4' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/D4D03AQGz6QUR_-eIjw/profile-displayphoto-shrink_800_800/0/1686393975815?e=2147483647&v=beta&t=_CD71CAfCleW5tHGWYyF9hfDZLPFBBUui5h78tRZHIo',
    'speakername' : 'Dr. Uday Roman',
    'institution' : 'MP Jal Nigam',
    'linkedin' : 'https://www.linkedin.com/in/drudayroman'
  },

  'sp5' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/D5603AQE5krRcgZCYRw/profile-displayphoto-shrink_400_400/0/1685195374929?e=1699488000&v=beta&t=Y1S-9V3PqGGqVcq2eFt9NBUWolYxkgxVg9s3hZvJKf4',
    'speakername' : 'Pradeep Jha',
    'institution' : 'JPMorgan Chase & Co.',
    'linkedin' : 'https://www.linkedin.com/in/pradeep-jha-56078814/'
  },

  'sp6' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5603AQGhST4GMe6UAw/profile-displayphoto-shrink_400_400/0/1516450277872?e=1699488000&v=beta&t=gO2mY0_ieQyD-j92pmKU_aKEnDW2UvqinG9rDQsuJ98',
    'speakername' : 'Tamal Banerjee',
    'institution' : 'Nordea',
    'linkedin' : 'https://www.linkedin.com/in/tamal-banerjee-phd-89858030/'
  },

  'sp7' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5603AQG73SpAPPP4nw/profile-displayphoto-shrink_400_400/0/1516462027025?e=1699488000&v=beta&t=ukA5QkVlBW0pjHL9RSlxfPQ3z2awqlnSSZbgG_wtcFQ',
    'speakername' : 'Mr. Shebeer Mohammed',
    'institution' : 'enCAD',
    'linkedin' : 'https://www.linkedin.com/in/shebeer-mohammed-25ba9430/'
  },

   'sp8' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5103AQG86gUIfjHT5A/profile-displayphoto-shrink_400_400/0/1547101776811?e=1699488000&v=beta&t=lfyfqnxaJ1l4yPqgJI-YRAB3z8MpgcKzYtbObTZaj4c',
    'speakername' : 'Dr. Umesh Waghmare',
    'institution' : 'JNCASR',
    'linkedin' : 'https://www.linkedin.com/in/umesh-v-a2873137/'
  },

  'sp9' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/D4D03AQEasltH0PFrNw/profile-displayphoto-shrink_400_400/0/1685872566513?e=1699488000&v=beta&t=7V3t7EFF8aiEwHMBzaZ97JbKJonAhr69ZXY9FH0iT-A',
    'speakername' : 'Dr. Sandeep Goyal',
    'institution' : 'IISER Mohali',
    'linkedin' : 'https://www.linkedin.com/in/sandeep-goyal-b1b143139/'
  },

  'sp10' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5603AQFaNzjGq54Bcw/profile-displayphoto-shrink_400_400/0/1517423480181?e=1699488000&v=beta&t=s8UmQTdm5VDARGIEyvh1lV6FUkbzGifaQVxfMg5jxiw',
    'speakername' : 'Dr. Debarshini Chakraborty',
    'institution' : 'Centre for Cellular and Molecular Platforms (C-CAMP)',
    'linkedin' : 'https://www.linkedin.com/in/debarshini-chakraborty-26445169/'
  },

  'sp11' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5603AQGv8pl-cSd_Mw/profile-displayphoto-shrink_400_400/0/1631525916385?e=1699488000&v=beta&t=ZMb9Z8sgPeVYZ1bS_2ZJ05T2slLP1csHd1rZ-P2E_VU',
    'speakername' : 'Dr. Sheela Siddappa',
    'institution' : 'Kyndryl',
    'linkedin' : 'https://www.linkedin.com/in/dr-sheela-siddappa-2997619/'
  },

  'sp12' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C4D03AQFz17FUCR8w9Q/profile-displayphoto-shrink_400_400/0/1655810690871?e=1699488000&v=beta&t=X3pR7n9hpNkyFNC9qx8IF-HcyOql-EQYLo-MqgTx178',
    'speakername' : 'Ms. Kavitha ShanmugaSundaram',
    'institution' : 'MulticoreWare',
    'linkedin' : 'https://www.linkedin.com/in/kavithashans/'
  },

    'sp13' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5603AQHQtpvz_X8GOg/profile-displayphoto-shrink_400_400/0/1516644843224?e=1699488000&v=beta&t=wrE3BbOXyfxDuCMIAOyWpoc41gurrJxmkTqIRK3GoMs',
    'speakername' : 'Mr. Sagar Bele',
    'institution' : 'ERNST & YOUNG LLP',
    'linkedin' : 'https://www.linkedin.com/in/sagar-bele-a41a7336/'
  },

   'sp14' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/D5603AQGf5MMSu45tVA/profile-displayphoto-shrink_400_400/0/1688968624710?e=1699488000&v=beta&t=Vlw7lZT-SDiL37VXvSuyHrwSqOiNAnm3WiSNYSQuXxw',
    'speakername' : 'Ms. C Rethi Nair',
    'institution' : 'Grid Controller of India Limited',
    'linkedin' : 'https://www.linkedin.com/in/c-rethi-nair-173106259/'
  },

  'sp15' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/C5603AQHgFanIB-k4ug/profile-displayphoto-shrink_400_400/0/1517695349884?e=1699488000&v=beta&t=xj5FgsdzMF_GhXew_fa_EouH-ajtLApZriv3403tMUk',
    'speakername' : 'Dr. Manoj Bhalerao',
    'institution' : 'Wabtec Corporation',
    'linkedin' : 'https://www.linkedin.com/in/manoj-bhalerao-122601a/'
  },

  'sp17' : {
    'imgsrc' : 'https://media.licdn.com/dms/image/D5603AQF98shzec1Nrg/profile-displayphoto-shrink_400_400/0/1679368173505?e=1699488000&v=beta&t=1pv4FVzvdapkN1QMdxvn_o--gsFKqcjghpy0xL-dzH8',
    'speakername' : 'Dr. Viveka Kalidasan',
    'institution' : 'The Edify Project',
    'linkedin' : 'https://www.linkedin.com/in/vivekakalidasan/'
  }
}

const speakerDiv = document.querySelector('.speaker-div');

for (const [key, value] of Object.entries(speakers)) {
  speakerDiv.innerHTML += `<div class="col-lg-4 col-md-6">
  <div class="speaker" data-aos="fade-up" data-aos-delay="200">
    <img src="${value.imgsrc}" alt="Speaker 2" class="img-fluid">
    <div class="details">
      <h3>${value.speakername}</h3>
      <p>${value.institution}</p>
      <div class="social">
        <a href="${value.linkedin}"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
  </div>`;
}