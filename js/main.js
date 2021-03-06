// github icon
const bounce = document.querySelectorAll('.info_wrap a');


bounce.forEach(item=>{
        item.addEventListener('mouseover',function(){
           item.classList.add('animate__bounce');
        });
        item.addEventListener('mouseleave',function(){
            item.classList.remove('animate__bounce');
        });
    })

//window scroll event

$(window).on("scroll", function () {
    const $win = $(window),
    winH = $win.height(),
    current_pos = $win.scrollTop();

    //nav section

    $('section').each(function(){
        const section = $(this);
        const num = section.attr('data-scroll-target');
        console.log()

        if(section.offset().top < current_pos+(winH/2) && current_pos+(winH/2) < section.offset().top + section.outerHeight()){
            $('.menu [data-scroll-trigger="'+num+'"]').addClass('neon');
        }else{
            $('.menu [data-scroll-trigger="'+num+'"]').removeClass('neon');
        }
       
    });

    //section3 show animate

    let scrollTop3 = $('.section_skill').offset().top;
    if(current_pos>scrollTop3-100){
        var tl = anime.timeline({
            duration: 750
        });
        tl.add({
            targets: '.slide .container',
            opacity: 1,
            delay: function(el, i, l) {
                return i * 100;
            }
        });
        tl.add({
            targets: '.slide1 .container',
            opacity: 1,
            delay: function(el, i, l) {
                return i * 100;
            }
        });
    }

    // show drag cursor when in section4
    let scrollTopPort = $('.section_portfolio').offset().top;
    if(current_pos>scrollTopPort-200){
        $('.cursor').css('display','block');
        $('body').css('cursor','none');
    }else{
        $('.cursor').css('display','none');
        $('body').css('cursor','default');
    }
});


//smooth scroll
$('.nav-link').click(function(e){
    e.preventDefault();
    const target = $($(this).attr('href'));
    if(target.length){
        const scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'},800);
    }
});

//nav-link ??????
$('.listing').click(function(){
    $(this).addClass('neon');
    $(this).siblings().removeClass('neon');
});

// text animate anime.js

const textNode = document.querySelector('.text');
textNode.innerHTML = textNode.innerText.split("").map((char)=>{
    return`<span>${char ==" "? "&nbsp;" :char}</span>`
}).join("");

const textNode1 = document.querySelector('.text1');
textNode1.innerHTML = textNode1.innerText.split("").map((char)=>{
    return`<span>${char ==" "? "&nbsp;" :char}</span>`
}).join("");

anime({
    targets:".text span",
    opacity:[0,1],
    translateY:[100,0],
    duration:1500,
    easing:"easeOutExpo",
    // round: 1,
    delay:(e,i)=>300+50*i
});
anime({
    targets:".text1 span",
    opacity:[0,1],
    translateY:[100,0],
    duration:1500,
    easing:"easeOutExpo",
    // round: 1,
    delay:(e,i)=>800+50*i
});

//  job title type.js

var typed = new Typed('.change', {
  strings: 
  ['Web Designer',
    'UI/UX Designer'
    ],
  typeSpeed:100,
  backSpeed:100,
  loop:true,
  startDelay: 1200,
});
// drag
const slider = document.querySelector(".section_portfolio");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

//hoevr card drag cursor display none
card = document.querySelectorAll('.portfolio_card');

card.forEach(item=>{
    item.addEventListener('mouseover',function(){
        mouseCursor.classList.remove('cursor');
    });
    item.addEventListener('mouseleave',function(){
        mouseCursor.classList.add('cursor');
    });
})


// cursor
let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove',cursor);
function cursor(e){
mouseCursor.style.top = e.pageY + 'px';
mouseCursor.style.left = e.pageX + 'px';
}


//
const $win = $(window),
    current_pos = $win.scrollTop();
let scrollTopPort = $('.section_portfolio').offset().top;


const navbar = document.querySelector('.navbar');


if(current_pos>scrollTopPort-100){
    navbar.addEventListener('mouseover',function(){
    mouseCursor.classList.remove('cursor')
})
navbar.addEventListener('mouseleave',function(){
    mouseCursor.classList.add('cursor')
})
}
