$(document).ready(function(){
    $('.item_up_slider').slick({
      centerPadding: '60px',
      prevArrow: '<button type="button" class="slick-prev"> <img src="../icons/left.svg"> </button>',
      nextArrow: '<button type="button" class="slick-next"> <img src="../icons/right.svg"> </button>',
    });

    $('.promo_slider').slick({
      appendArrows: ".container",
      prevArrow: '<button type="button" class="promo_slider_slick-prev"> <img src="../icons/lw.svg"> </button>',
      nextArrow: '<button type="button" class="promo_slider_slick-next"> <img src="../icons/rw.svg"> </button>'

    });

    $('.wraper').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev2"> <img class="arrow" src="../icons/left.svg"> </button>',
      nextArrow: '<button type="button" class="slick-next2"> <img class="arrow" src="../icons/right.svg"> </button>',
    });

    $('.modal__slider_inner').slick({
      appendArrows: ".modal__slider_arrow",
      prevArrow: '<button type="button" class="modal__slider_slick-prev"> <img src="../icons/lw.svg"> </button>',
      nextArrow: '<button type="button" class="modal__slider_slick-next"> <img src="../icons/rw.svg"> </button>'

    });

    const showDialog = () => {
      document.getElementById('dialog').classList.add('show');
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    };
    const closeDialog = () => {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      document.getElementById('dialog').classList.remove('show');
    };
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    //modal

    $('.modal__close').on('click', function() {
      $('#pop_up').fadeOut('slow');
	});
	
    $('[data-modal=pop_up]').each(function(i) {
      $(this).on('click', function (){
        $('#pop_up .modal__title').text($('.item_title').eq(i-1).text());
        $('.overlay, #pop_up').fadeIn();
      });
    });


});

const gastroMenu = document.querySelector('.header__dropdown_menu'),
      DropDownBtn = document.querySelector('.header__main_links_items'),
      wraper = document.querySelector('.header__dropdown_menu .wraper');

console.log(wraper);
console.dir(DropDownBtn);
console.dir(gastroMenu);

function hideGastroMenu(){
  gastroMenu.classList.add('hide', 'fade_in');
  gastroMenu.classList.remove('show', 'fade_out');
}

function showGastroMenu(){
  gastroMenu.classList.remove('hide', 'fade_in');
  gastroMenu.classList.add('show', 'fade_out');
}


DropDownBtn.addEventListener('click', ()=>{
  if (gastroMenu.classList.contains('show')){
    hideGastroMenu();

  } else {
    showGastroMenu();
  }
});

wraper.addEventListener('click', ()=>{
  hideGastroMenu();
})
