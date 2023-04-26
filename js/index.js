

const mql = window.matchMedia("(max-width: 992px)")
const mql2 = window.matchMedia("(max-width: 767px)")

const changeSlideView = (slide) => {
  var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const handleOrientationChange = (e) => {
  if (mql2.matches) {
    changeSlideView(1)
  } else if (mql.matches) {
    changeSlideView(2)
  } else {
    changeSlideView(3)
  }
}


handleOrientationChange();

mql.onchange = (e) => {
  handleOrientationChange(e);
}

mql2.onchange = (e) => {
  handleOrientationChange(e);
}

var brands = new Swiper(".brands", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
});

(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const effectClasses = [
          'slideInLeft',
          'fadeInDown',
          'slideInRight',
          'bounceIn',
          'zoomInDown',
          'rotateIn',
          'zoomIn',
          'fadeInRight',
          'fadeInLeft',
          'zoomInUp',
          'jackInTheBox'
        ];
        if (entry.isIntersecting) {
        const matchingClass = entry.target.classList.value.split(' ')
          .find(className => effectClasses.includes(className));
        if (matchingClass) {
          entry.target.classList.add('animate__animated', `animate__${matchingClass}`);
        }
        observer.unobserve(entry.target);
        }
      });
    });

    const count = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const effectClasses = [
          'year-count',
          'happy-patients',
          'experts-doctors',
          'hospital-room',
          'award-winner',
          'appointment',
          'primary-care',
          'donate',
          'pay-bill',
          'emergency'
        ];
        if (entry.isIntersecting) {
          const matchingClass = entry.target.classList.value.split(' ')
            .find(className => effectClasses.includes(className));
          if (matchingClass) {
            let website = new CountUp('year-count', 0, 15, 0, 1);
            website.start();
            let happyPatients = new CountUp('happy-patients', 0, 150, 0, 4);
            happyPatients.start();
            let expertsDoctors = new CountUp('experts-doctors', 0, 120, 0, 4);
            expertsDoctors.start();
            let hospitalRoom = new CountUp('hospital-room', 0, 30, 0, 4);
            hospitalRoom.start();
            let awardWinner = new CountUp('award-winner', 0, 70, 0, 4);
            awardWinner.start();
            let appointment = new CountUp('appointment', 0, 500, 0, 4);
            appointment.start();
            let primaryCare = new CountUp('year-experince', 0, 15, 0, 4);
            primaryCare.start();
            let donate = new CountUp('donate', 0, 60, 0, 4);
            donate.start();
            let payBill = new CountUp('pay-bill', 0, 29, 0, 4);
            payBill.start();
            let emergency = new CountUp('emergency', 0, 35, 0, 4);
            emergency.start();
    
            // تعطيل المراقبة
            count.unobserve(entry.target);
          }
        }
      });
    }, { once: true }); // إضافة خاصية once: true
    
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
      observer.observe(element); 
    });

    const countElements = document.querySelectorAll('.count');
    countElements.forEach(element => {
      count.observe(element)
    })
})();


const slideResults = document.getElementById('swiper-results');
const slideLab = document.getElementById('swiper-lab');
const result = document.getElementById('our-results');
const lab = document.getElementById('our-lab');

document.querySelectorAll('input[type="radio"]').forEach(item => {
  item.addEventListener('change', () => {
    if (result.checked) {
        slideResults.classList.remove('d-none')
        slideLab.classList.add('d-none')
      
    } else if(lab.checked) {
      slideResults.classList.add('d-none')
      slideLab.classList.remove('d-none')
    }
  })
})


var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    fetch("https://ipapi.co/json")
      .then(function(res) { return res.json(); })
      .then(function(data) { callback(data.country_code); })
      .catch(function() { callback("us"); });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js" // just for formatting/placeholders etc
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

};

document.getElementById("year").innerHTML = new Date().getFullYear();