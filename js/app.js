// $('.loader').fadeOut();

// $('.main,.changing-bg, .about-wrapper').fadeIn(100);
// $('body').css('overflow', 'visible')
// $('html').css('overflow', 'visible')

// // scrolling to top
// $('html, body').animate({
//   scrollTop: 0
// }, 700);


// jquery mobile

if(window.innerWidth <= 1100){
  const jqueryMobileScript = $('<script></script>').attr('src', './js/jquery.mobile.min.js');
  $('body').append(jqueryMobileScript);
}


// main music

$('.menu__volume img').on('click', function() {
  if($(".main-audio")[0].paused) {
    $(".main-audio")[0].play();
    $(this).attr('src', './img/volume.svg');
  } else{
    $(".main-audio")[0].pause();
    $(this).attr('src', './img/volume-muted.svg') ;
  } 
});


// data base

const data = [{
    vacancy: "ПЛАТФОРМА FACEBOOK",
    name: "tommy vercetti",
    skills: [90, 95, 80, 75, 85, 92],
    hero: "./img/info-hero-1.png",
    bg: "./img/info-bg-1.png",
    text: `
      <p>
        <b>Треба перетерти!</b>
      </p>
      <p>
        Чув ти <b>притягнув</b> свій хребет до мого міста. 
      </p>
      <p>
        Ну, сподіваюся, що <b>голова</b> в тебе <b>на місці</b>, бо я шукаю собі <b>штемпа</b> в команду. 
      </p>
      <p>
        <b>Відразу про важливе: </b>
      </p>
      <p>
        <b>Лупини дам</b> скільки потрібно, для розігріву почнемо з <b>пачки зелені.</b> 
      </p>
      <p>
        Бери себе в руки і <b>виходь на глибину</b>, свисток. Я тобі у цьому <b>допоможу.</b> 
      </p>
      <p>
        Відповідь потрібна до <b>завтра</b>. Якщо зважився, черкани номерок.
      </p>
    `
  },
  {
    vacancy: "affiliate",
    name: "lance vance",
    skills: [85, 65, 100, 50, 70, 90],
    hero: "./img/info-hero-2.png",
    bg: "./img/info-bg-2.png",
    
    text: `
      <p>
          <b>Розслаб булки! Шманати не буду</b>
      </p>
      <p>
          До мене <b>дійшли слухи</b>, що ти порішав <b>двіжуху</b> з Рікардо. І навіть свою <b>пукалку</b> не <b>діставав</b>.
      </p>
      <p>
          Я <b>шукаю тіпа</b> для переговорів і <b>залучення</b> інших банд до мене в <b>партнери</b>. Думаю,
          ти той що мені <b>потрібен</b>.
      </p>
      <p>
          <b>Волочи ногу</b> до мене на <b>віллу</b> в центрі міста - <b>перетремо</b>. Або <b>залиши цифри</b>,
          моя секретутка тобі <b>чирикне</b>.
      </p>
      <p>
          Якщо що, по ногам не сци. <b>Я за своїх</b> людей стіною.
      </p>
    `
  },
  {
    vacancy: "платформа tik-tok",
    name: "sonny forelli",
    skills: [95, 85, 35, 60, 65, 60],
    hero: "./img/info-hero-3.png",
    bg: "./img/info-bg-3.png",
    text: `
      <p>
        <b>Тобі вканало!</b>
      </p>
      <p>
        Бачу, що твої потуги дали <b>результат</b>, і ти нарешті <b>зливаєш в плюс</b>.
      </p>
      <p>
        Вже <b>завтра</b> ти будеш працювати на мене!
      </p>
      <p>
        Для початку я <b>піднімаю</b> твій місячний <b>бюджет</b> на пачку зелених папірців. Але не просто так! Потрібно <b>виконувати</b>
        деякі мої <b>правила</b>.
      </p>
      <p>
        <b>Заробляй</b> мені <b>бабки</b>, і я <b>буду</b> щедро ними з тобою <b>ділитись</b>.
      </p>
      <p>
        А якщо ні, то познайомлю тебе з Джоні. Він любить робити коліна на виворіт. 
      </p>
    `
  },
  {
    vacancy: "платформа google",
    name: "umberto robina",
    skills: [85, 65, 50, 70, 95, 80],
    hero: "./img/info-hero-4.png",
    bg: "./img/info-bg-4.png",
    text: `
      <p>
        <b>Давай без фігні!</b>
      </p>
      <p>
        <b>Мені</b> одна шльондра <b>нашептала</b>, ти пройшов стажування в Гугл і <b>дізнався всі тонкощі та хитрощі</b>.
      </p>
      <p>
        <b>Пропоную</b> тобі добровільно на мене працювати, зарплата як в <b>Каліфорнії</b>, плюс <b>за</b> кожного <b>барана</b> – доплата
        неплоха.
      </p>
      <p>
        Тобі <b>допоможе</b>b> цілий ангар співробітників. <b>Бюджет</b> <b>резиновий</b>, можеш тягнути поки по ногам не брисне. Але якщо будеш
         <b>лити</b> в мінус – бризне не тільки по ногам.
      </p>
      <p>
        Я чекаю, варіант в тебе аж один. Кращих умов в країні <b>не знайдеш.</b>.
      </p>
    `
  },
  {
    vacancy: "e-mail спецiалiст",
    name: "phill cassidy",
    skills: [50, 80, 40, 55, 65, 70],
    hero: "./img/info-hero-5.png",
    bg: "./img/info-bg-5.png",
    text: `
      <p>
        <b>Вечір в хату!</b>
      </p>
      <p>
          Мені <b>доповіли</b>, що ти вдарив мою повію. Ти що <b>хотів</b>, щоб з неї випало <b>пару копійок</b>?
      </p>
      <p>
          Я <b>пробил</b> чим ти дихаєш, і <b>знаю</b>, як ти мені відшкодуєш збитки. Відбитих <b>спамерів
          знайти</b> складно, а у мене <b>є</b> <b>мутка</b>, яка 100% <b>вистрілить</b>.
      </p>
      <p>
          <b>Є пару соток лохів, яким потрібно у вуха залити лайна побільше. В цьому ти майстер.</b>
      </p>
      <p>
          <b>Грошей</b> дам, вірю що <b>стане</b> не одну <b>повію</b>>.
      </p>
      <p>
          Чекаю <b>завтра</b>. Адресу <b>скину</b>> в дірект.
      </p>
    `
  },
  {
    vacancy: "Платформа yandex",
    name: "ken rosenberg",
    skills: [65, 75, 65, 55, 75, 65],
    hero: "./img/info-hero-6.png",
    bg: "./img/info-bg-6.png",
    text: `
      <p>
          <b>Бачу, що ти норм штемп!</b>
      </p>
      <p>
          Вже давно <b>шукаю експерта</b> по парашці. Якщо <b>ти</b> саме він – <b>будеш</b> достойно
          <b>нагороджений</b>!
      </p>
      <p>
          Я організовую нову справу і <b>шукаю</b> надійних <b>людей</b> без упереджень.
      </p>
      <p>
          <b>У мене</b> цілий <b>акваріум</b> офісного <b>планктону</b>, що по сигналу <b>буде</b>
          <b>товкти</b> своїми сердельками <b>по клавіатурі.</b>.
      </p>
      <p>
          І все для того, <b>щоб ти </b> і я - мали <b>бабок</b> до...багато.
      </p>
    `
  }
];


// progress bar

NProgress.configure({
  parent: '#loader__progress'
});

NProgress.start();

setTimeout(() => {
  NProgress.set(.4);
}, 2000);

setTimeout(() => {
  NProgress.set(.7);
}, 4000);

setTimeout(() => {
  NProgress.set(1);
  $('.loader').fadeOut()
}, 6000);

// loader photos

const loaderPhotos = document.querySelectorAll('.loader__title__img img');
setTimeout(() => {
  $('.loader__title__img img.one').fadeOut();
  $('.loader__title__img img.two').fadeIn();
}, 1500);
setTimeout(() => {
  $('.loader__title__img img.two').fadeOut();
  $('.loader__title__img img.three').fadeIn();
}, 4500);


// changing main content

const changeMainContent = obj => {
  if ($('.info__vacancy').text() !== obj.vacancy) {
    $('.info__vacancy').text(obj.vacancy);
    $('.info__name').text(obj.name);

    skillBars.forEach((bar, index) => {
      $(bar).css('width', obj.skills[index] + '%');
    });
    $('.info__hero, .changing-bg').fadeOut(250);

    setTimeout(() => {
      $('.info__hero img').attr('src', obj.hero);
      $('.changing-bg').attr('src', obj.bg);
      $('.info__hero,.changing-bg').fadeIn(300);
    }, 200);
    $('.info__hero, .changing-bg').fadeOut(250);

    setTimeout(() => {
      $('.info__hero img').attr('src', obj.hero);
      $('.changing-bg').attr('src', obj.bg);
      $('.info__hero,.changing-bg').fadeIn(300);
    }, 200);
    $('.info__text').html(obj.text);
  }
}


// main

const barItems = Array.from(document.querySelectorAll('.main__bar__item'));
const skillBars = Array.from(document.querySelectorAll('.info__skills__item__bar span'));


//scrolling to image

const mainScroll = index => {
  if(window.innerWidth <= 1100){
    window.removeEventListener('scroll', wheelEvent);
  }
  index = String(index);
  // mached image
  const sc = barItems.filter(item => item.dataset.index === index)[0];
  // mached obj
  const obj = data[+index - 1];
  if (sc) {
    sc.classList.add('active')
    // scrolling to needed image
    // ending scroll animation 
    
    let dn = $(sc).offset().top - this.innerHeight / 2 + sc.clientHeight / 2;
    if (index === '2') {
      dn = dn + 30 
    }
    if(index === '5' && window.innerHeight <= 1100 && window.innerHeight >= 900){
      dn = dn - 100
    }
    if (index === '6') {
      if(dn){
        dn = $('.about-wrapper').offset().top - window.innerHeight - 40;
      } 
    }

    if(window.innerWidth > 1100){
      $('html, body').animate({
        scrollTop: dn
      }, 700);
    } else{
      $('html, body').animate({
        scrollTop: dn
      }, 400);
    }

    // changing big image right value

    if (index === '5') {
      $('.info__hero').addClass('big');
    } else {
      $('.info__hero').removeClass('big');
    }

    if(window.innerWidth > 650){
      changeMainContent(obj);
    }
    if(window.innerWidth > 1100){
      setTimeout(() => {
        window.addEventListener('wheel', wheelEvent);
      }, 600);
    }

  }
}

let flag = 1;
let scrollFlag = 0;


//scroll to vacancy section

const scrollToVacancySec = () => {
  if (this.scrollY < $('.devide').offset().top) {
    window.removeEventListener('scroll', scrollToVacancySec);
    $('.main-header').fadeIn();
    if(window.innerWidth > 1100){
      $('.info .header').fadeIn();
    }
    mainScroll('6');
    scrollFlag = 1;
    flag = 6;
    if(window.innerWidth <= 1100){
      scrollY = window.scrollY
      setTimeout(() => {
        $('html').on('scrollstart', mobileScrollStart);
        $('html').on('scrollstop', mobileScrollStop);
      }, 700);
    } else{
      $('.info .header').fadeIn();
      $('body').css('overflow', 'hidden')
      window.addEventListener('wheel', wheelEvent);
    }
  }
}


// defining where were scrolled

const wheelEvent = (e) => {
  window.removeEventListener('wheel', wheelEvent);
  window.removeEventListener('scroll', scrollToVacancySec);
  barItems.filter(item => item.dataset.index === String(flag))[0].classList.remove('active')
  if (e.deltaY > 0) {
    // down
    flag++;
  } else {
    // up
    scrollFlag === 0 ? scrollFlag : scrollFlag--;
    flag--;
  }
  if (flag < 1) {
    flag = 1;
  } else if (flag >= barItems.length) {
    scrollFlag++;
    flag = barItems.length;
    if (scrollFlag > 1) {
      window.removeEventListener('wheel', wheelEvent);
      $('html, body').animate({
        scrollTop: $('.about-wrapper').offset().top + 5
      }, 1200);
      setTimeout(() => {
        $('body').css('overflow-y', 'visible')
        
      }, 1200);
      $('.main-header').fadeOut();
      if(window.innerWidth > 1100){
        $('.info .header').fadeOut();
      }

      setTimeout(() => {
        window.addEventListener('scroll', scrollToVacancySec);
      }, 1500);
      scrollFlag = 0;
      AOS.init();
      return
    }
  }

  mainScroll(flag);
}



// menu items events

$('.menu .menu__item').on('click', function (e) {
  window.removeEventListener('scroll', scrollToVacancySec);
  $('.main__bar__item').removeClass('active');
  $('.main, .changing-bg, .about-wrapper, .header').css('display', 'block');
  $('html').css('overflow', 'visible')
  if(window.innerWidth > 650){
    $('.info').fadeIn();
  } 
  if(window.innerWidth <= 1100){
    $('body, html').css('overflow-y', 'visible');
    $('html').on('scrollstart', mobileScrollStart);
    $('html').on('scrollstop', mobileScrollStop);
  }
  e.preventDefault();
  $("<audio></audio>").attr({
    'src': './audio/click.mp3',
    'volume': 1,
    'autoplay': 'autoplay'
  }).appendTo("body");
  $('.menu').fadeOut();
    mainScroll(this.dataset.url);
    flag = this.dataset.url;
  if(this.dataset.url === '6'){
    scrollFlag = 1;
  }
});

$(".menu__item").mouseenter(function () {
  if(window.innerWidth > 1100){
    $("<audio></audio>").attr({
      'src': './audio/hover.mp3',
      'volume': 1,
      'autoplay': 'autoplay'
    }).appendTo("body");
  }
});


// main bar items 

const mainBarItemsScroll = function () {
  if($(this).hasClass('active')){
    $('.info__play img')[0].click();
    window.removeEventListener('wheel', wheelEvent);
  } else{
    $('.main__bar__item').removeClass('active');
    mainScroll(this.dataset.index);
    flag = this.dataset.index;
  }
}


// opening vacancy

if(window.innerWidth > 650){
  $('.info__play img').on('click', function() {
    window.removeEventListener('wheel', wheelEvent);
    $('.header__nav a').addClass('vacancy-open')
    // $('.main__bar').fadeOut(500);
    let {innerWidth} = window;
    if (innerWidth > 1100) {
      $('.info__skills, .info__scroll, .info__play, .main__scroll, .header .main-title').fadeOut(500);
      $('.main__bar').css('opacity', '0');
      let right = '',
          bigRight = '';
      right = '135%';
      bigRight = '138%';
      setTimeout(() => {
        $('.main__bar').css('z-index', '13');
          if (innerWidth >= 1700) {
              right = '166%';
              bigRight = '175%'
          } else if (innerWidth <= 1700 && innerWidth >= 1400) {
              right = '166%';
              bigRight = '172%';
          } else if (innerWidth <= 1400 && innerWidth >= 1024) {
            right = '166%';
            bigRight = '172%';
          } else if (innerWidth <= 1024 && innerWidth >= 1024) {
              right = '135%';
              bigRight = '138%';
          }
  
          $('.info__hero').hasClass('big')
              ? $('.info__hero').css('right', bigRight)
              : $('.info__hero').css('right', right);
          $('.info__hero').css('transform', 'scale(1.35)')
  
      }, 300);
      setTimeout(() => {
        $('.info__text, .header__close, .info__wrapper .button-wrapper').fadeIn(500);
        $('.info__hero img.bg').css('opacity', '0.1')
      }, 1200);
    } else{
      $('.info__skills, .info__scroll, .info__play, .main__scroll, .header .main-title').fadeOut();
      $('.main__bar').css('opacity', '0');
      
      setTimeout(() => {
        $('.main').css({
          'width': '0',
          'min-width': '0'
        })
      }, 300);
      setTimeout(() => {
        $('.info__text, .header__close').fadeIn();
        $('.info__hero img.bg').css('opacity', '0.1')
      }, 300);
    }
    
  });
}


// closing vacancy

const closeVacancy = () => {
  $('.header__nav a').removeClass('vacancy-open')
  if(window.innerWidth > 1100){
    $('.main__bar').css('z-index', '15');
    window.addEventListener('wheel', wheelEvent)
    $('.info__hero').css('right', '0');
    $('.info__hero').css('transform', 'scale(1)')
  }
  $('.info__wrapper .button-wrapper').fadeOut(200);
  $('.info__text, .header__close').fadeOut(500);
  $('.info__hero img.bg').css('opacity', '0')
  setTimeout(() => {
    $('.info__skills, .info__scroll, .info__play, .main__scroll, .header .main-title').fadeIn(500);
    if(window.innerWidth <= 1100 && window.innerWidth >= 650){
      $('.main').css({
        'width': '250px',
        'min-width': '250px'
      })
      setTimeout(() => {
        $('.main__bar').css('opacity', '1');
      }, 1000);
    } else{
      $('.main__bar').css('opacity', '1');
    }
  }, 600);
}

$('.header__close').on('click', closeVacancy);



// opening menu

$('.header .main-title, .burger__nav .menu__item.home').on('click', function() {
  $('.menu').fadeIn();
  $('.burger__nav').fadeOut();
  $('.burger').removeClass('active');
  if($(this).hasClass('home') && $(this).hasClass('vacancy-open')){
    closingMobVacancy(true);
  }
  setTimeout(() => {
    $('body, html').css('overflow', 'hidden');
  }, 500);
  $('html').off('scrollstart', mobileScrollStart);
  $('html').off('scrollstop', mobileScrollStop);
});


// scrolling to anchors

$('.header__nav a, .burger__nav .menu__item:not(.home)').on('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  var sc = $(this).attr("href"),
    dn = $(sc).offset().top;
    $('.main-header, .burger__nav').fadeOut();
    $('.burger').removeClass('active');
    $('.main__bar__item').removeClass('active');
  if (this.className.includes('vacancy-open')) {
    if(window.innerWidth > 650){
      closeVacancy();
      setTimeout(() => {
        $('html, body').animate({
          scrollTop: dn + 38
        }, 1000);
        $('.header__nav a').removeClass('vacancy-open')
      }, 1000);
      setTimeout(() => {
        $('body').css('overflow-y', 'visible')
        window.addEventListener('scroll', scrollToVacancySec);
      }, 2000);
    } else{
      closingMobVacancy(true);
      $('.main-header').fadeOut();
      if(window.innerWidth > 1100){
        $('.info .header').fadeOut();
      }
      $('html, body').animate({
        scrollTop: dn + 5
      }, 1000);
      setTimeout(() => {
        $('body').css('overflow-y', 'visible')
        window.addEventListener('scroll', scrollToVacancySec);
      }, 1000);
    }
  } else{
    $('html, body').animate({
      scrollTop: dn
    }, 1000);
    setTimeout(() => {
      window.addEventListener('scroll', scrollToVacancySec);
    }, 1000);
  }
  if(window.innerWidth > 1100){
    window.removeEventListener('wheel', wheelEvent);
    setTimeout(() => {
      $('body').css('overflow-y', 'visible')
    }, 1000);
  } else{
    $('body, html').css('overflow-y', 'visible');
    $('html').off('scrollstart', mobileScrollStart);
    $('html').off('scrollstop', mobileScrollStop);
  }
  AOS.init();
  flag = 6;
  scrollFlag = 0;
});

// burger menu

$('.burger__btn').on('click', function () {
  if($(this.parentElement).hasClass('active')) {
    $('.burger__nav').fadeOut()
    $('body, html').css('overflow-y', 'visible');
  } else{
    $('.burger__nav').fadeIn();
    if(window.innerWidth <= 650){
      $('body, html').css('overflow-y', 'hidden');
    }
  }
  $('.burger').toggleClass('active');
});
$('.burger__nav .menu__item').on('click', function () {
  $('.main__bar__item').removeClass('active');
  $('.burger').removeClass('active');
  $('.burger__nav').fadeOut();
});

$('.info .burger__btn').on('click', () => {
  $('.main-header').fadeIn();
  const removingHeader = () => {
    $('.main-header').fadeOut();
    $('.header:not(.info .header) .burger__btn').off('click', removingHeader)
  }
  $('.header:not(.info .header) .burger__btn').on('click', removingHeader)
});



let {scrollY} = window;

// mobile scroll start 

const mobileScrollStart = () => {
  scrollY = window.scrollY;
}

// mobile scroll stop 

const mobileScrollStop = () => {
  $('.main__bar__item').removeClass('active');
  $('html').off('scrollstart', mobileScrollStart);
  $('html').off('scrollstop', mobileScrollStop);
  if(scrollY > window.scrollY){
    // up
    scrollFlag === 0 ? scrollFlag : scrollFlag--;
    flag--;
  } else{
    //down
    flag++;
  }
  if (flag < 1) {
    flag = 1;
  } else if (flag >= barItems.length) {
    scrollFlag++;
    flag = barItems.length;
    if (scrollFlag > 1) {
      $('html, body').animate({
        scrollTop: $('.about-wrapper').offset().top + 5
      }, 600);
      $('.main-header').fadeOut();
      setTimeout(() => {
        window.addEventListener('scroll', scrollToVacancySec);
      }, 620);
      scrollFlag = 0;
      AOS.init();
      return
    }
  }
  mainScroll(flag);
  scrollY = window.scrollY;
  setTimeout(() => {
    $('html').on('scrollstart', mobileScrollStart);
    $('html').on('scrollstop', mobileScrollStop);
  }, 300);
}


// tapping on bar images

const selectImageInMobile = function(){
  if($(this).hasClass('active')){
    const obj = data[+this.dataset.index - 1];
    changeMainContent(obj);
    $('.burger__nav .menu__item').addClass('vacancy-open')
    $('html').off('scrollstart', mobileScrollStart);
    $('html').off('scrollstop', mobileScrollStop);
    $('.main__bar').css('opacity', '0');
    $('.header:not(.info .header)').fadeOut();
    $('.info').fadeIn();
    setTimeout(() => {
      $('.info__wrapper .button-wrapper').fadeIn();
    }, 100)
    $('body, html').css('overflow', 'hidden');
  }
}

//closing vacabcy in mobile 

const closingMobVacancy = flag => {
  $('.main__bar').css('opacity', '1');
  if(flag !== true){
    $('.header:not(.info .header)').fadeIn();
    setTimeout(() => {
      $('html').on('scrollstart', mobileScrollStart);
      $('html').on('scrollstop', mobileScrollStop);
    }, 500);
  }
  $('.info, .info__wrapper .button-wrapper').fadeOut();
  $('body, html').css('overflow-y', 'visible');
}


// mobile or desktop events

if(window.innerWidth <= 1100){
  $('body').css('overflow-x', 'hidden');
  $('html').css('overflow-x', 'hidden');
  $('.main__bar__item').on('tap', selectImageInMobile)
  if(window.innerWidth <= 650){
    $('.header__close').off('click', closeVacancy);
    $('.info .header__close').on('click', closingMobVacancy)
  }
} else{
  window.addEventListener('wheel', wheelEvent);
  mainScroll('1');
  $('.main__bar__item').on('click', mainBarItemsScroll);
}



// loading images 

const images = ['./img/info-bg-1.png', './img/info-bg-2.png' ,'./img/info-bg-3.png', './img/info-bg-4.png' ,'./img/info-bg-5.png', './img/info-bg-6.png', './img/info-hero-1.png', './img/info-hero-2.png' ,'./img/info-hero-3.png', './img/info-hero-4.png' ,'./img/info-hero-5.png', './img/info-hero-6.png', './img/loader-bg-1.png', './img/loader-bg-2.png', './img/loader-bg-3.png', './img/menu.png'];

const invisibleImagesWrapper = $('<div></div>').css('display', 'none');

$(images).each(function() {
  var image = $('<img />').attr('src', this);
  invisibleImagesWrapper.append(image);
});
$('body').append(invisibleImagesWrapper);



//form validation

const inputs = document.querySelectorAll(
    'form input[name="name"], form input[name="phone"]'
);
const submitBtn = document.querySelector('form button[type="submit"]');

const checkInputValidation = () => {
    let flag = false;
    inputs.forEach(input => {
        input.className === 'valid'
            ? flag = true
            : flag = false;
    });
    return flag
}
inputs.forEach(input => {
    input.addEventListener('input', e => {
        const {value, pattern} = e.target;
        value.match(pattern)
            ? e.target.className = "valid"
            : e.target.className = "invalid";

        if (!pattern) {
            if (value.length >= 3) {
                e.target.className = "valid";
            } else {
                e.target.className = "invalid";
            }
        }
        if (checkInputValidation()) {
            submitBtn.disabled = false;
        }
    });
});

// const form = document.querySelector('form');
// const submitBtnText = $(document.querySelector('form button span'));
// const submitBtnImg = $(document.querySelector('form button img'));


// // submit form

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // button animation

//     submitBtn.disabled = true;
//     $(submitBtn.parentElement).addClass('disabled');
//     submitBtnText.fadeOut();
//     submitBtnImg.fadeIn();


//     // collecting input values

//     const leadForm = e.target;
//     const leadFormElements = leadForm.elements;
//     // sending data

//     $.ajax({
//         method: $(this).attr('method'),
//         url: $(this).attr('action'),
//         type: "POST",
//         dataType: 'json',
//         data: {
//           name: leadFormElements[0].value,
//           phone: leadFormElements[1].value,
//           telegramm: leadFormElements[2].value,
//           resume: leadFormElements[3].value,
//         }, 
        
//         // index is for google sheets sheet index

//         success: (res) => {
//           if (res.status) {
//             submitBtnText.fadeIn();
//             submitBtnImg.fadeOut();
//             submitBtnText.text('Спасибо!');
//           } else {
//             submitBtnText.fadeIn();
//             submitBtnImg.fadeOut();
//             submitBtnText.text('Повторите попытку позже');
//           }
//         }
//     });
// });

$('img').on('mousedown', () => false);


// function get_name_browser() {
//     // получаем данные userAgent
//     const ua = navigator.userAgent;    
//     // с помощью регулярок проверяем наличие текста,
//     // соответствующие тому или иному браузеру
//     if (ua.search(/Chrome/) > 0) return 'Google Chrome';
//     if (ua.search(/Firefox/) > 0) return 'Firefox';
//     if (ua.search(/Opera/) > 0) return 'Opera';
//     if (ua.search(/Safari/) > 0) return 'Safari';
//     if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
//     // условий может быть и больше.
//     // сейчас сделаны проверки только 
//     // для популярных браузеров
//     return 'Не определен';
// }
 
// // пример использования
// let browser = get_name_browser();
// alert(browser);
if (window.innerWidth <= 650) {
document.querySelector(".menu__lang").addEventListener('click', (event) => {
  setTimeout(() => {
    window.location.reload()
  }, 500)
  window.location.href = `http://cta.is/en/`;
})
document.querySelectorAll(".footer-link a").forEach(el => {
  el.addEventListener('click', function(event) {
    setTimeout(() => {
      window.location.reload()
    }, 500)
    window.location.href = this.href;
  })
})
}
if (window.location.href.includes("vacancy") && document.documentElement.clientWidth > 650) {
const vacancy = window.location.href
                .split('?')[1]
                .split('&')
                .filter(item => item.includes('vacancy'))[0]
                .split('=')[1];
switch(vacancy){
  case 'facebook': {
    document.querySelector('[data-url="1"]').click();
    setTimeout(() => {document.querySelector('.info__play img').click();}, 1000)
    break;
  }
  case 'affiliate': {
    document.querySelector('[data-url="2"]').click();
    setTimeout(() => {document.querySelector('.info__play img').click();}, 1000)
    break;
  }
  case 'tik-tok': {
    document.querySelector('[data-url="3"]').click();
    setTimeout(() => {document.querySelector('.info__play img').click();}, 1000)
    break;
  }
  case 'google': {
    document.querySelector('[data-url="4"]').click();
    setTimeout(() => {document.querySelector('.info__play img').click();}, 1000)
    break;
  }
  case 'email': {
    document.querySelector('[data-url="5"]').click();
    setTimeout(() => {document.querySelector('.info__play img').click();}, 1000)
    break;
  }
  case 'yandex': {
    document.querySelector('[data-url="6"]').click();
    setTimeout(() => {document.querySelector('.info__play img').click();}, 1000)
    break;
  }
}
} else {
  const vacancy = window.location.href
                .split('?')[1]
                .split('&')
                .filter(item => item.includes('vacancy'))[0]
                .split('=')[1];
switch(vacancy){
  case 'facebook': {
    document.querySelector('[data-url="1"]').click();
    setTimeout(() => {$(".main__bar__item.active").trigger('tap');}, 1000)
    break;
  }
  case 'affiliate': {
    document.querySelector('[data-url="2"]').click();
    setTimeout(() => {$(".main__bar__item.active").trigger('tap');}, 1000)
    break;
  }
  case 'tik-tok': {
    document.querySelector('[data-url="3"]').click();
    setTimeout(() => {$(".main__bar__item.active").trigger('tap');}, 1000)
    break;
  }
  case 'google': {
    document.querySelector('[data-url="4"]').click();
    setTimeout(() => {$(".main__bar__item.active").trigger('tap');}, 1000)
    break;
  }
  case 'email': {
    document.querySelector('[data-url="5"]').click();
    setTimeout(() => {$(".main__bar__item.active").trigger('tap');}, 1000)
    break;
  }
  case 'yandex': {
    document.querySelector('[data-url="6"]').click();
    setTimeout(() => {$(".main__bar__item.active").trigger('tap');}, 1000)
    break;
  }
}
}
