
// text = 'الـى هـؤلاء الـذين لـم يـعودوا مـعنا بأجسـادهـم.. كـنتم وسـتظلون المـلهم الاوحـد لـنا فـى هـذه الـحيـاة... ';
// textTwo = '              لا تنـسو الـدعاء لـتلك الـورود الـتى تـوفاها الـله .. د.يـوسف الـميهي ود.حـسن ماهر وم.احمـد عطـا ... ود.عبـدالـرحمن صـلاح ... ود.نهـله خـالد ود.شـيماء منصور ود.الـاء رمضان وكل امـوات المسـلمين يـارب العـالمين ';
// i = 0 , j = 0

// const starting = document.querySelector(".start");

// window.onload = function() {

//     var typeWriter = setInterval( function () {
//     document.getElementById('text').textContent += text[i];
    
//      i += 1;
 
//     if (i > text.length -1) {

//          clearInterval(typeWriter);
  
//          var typetWriter = setInterval( function () {

//          document.getElementById('text-two').textContent += textTwo[j];
 
//          j += 1;

//          if (j > textTwo.length -1) {

//             clearInterval(typetWriter); 
//             starting.classList.add("active");
     
//          }
//         }, 80)   
     
//       }
//     }, 80);


// }

let alive = document.querySelector(".we-alive");

document.querySelector(".starting-intro span").onclick = function () {
    document.querySelector(".starting-intro").remove()
    Swal.fire('نحن احياء وللحلم بقية ☺️❤️')
    alive.play();
    
}


// const card = document.querySelector(".card");
// let countdowndate = new Date("Jan 24, 2023 16:00:00").getTime();
// let counter = setInterval(()  => {

//     let dateNow = new Date().getTime();

//     let dateDiff = countdowndate - dateNow;

//     let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
//     let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

//     document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
//     document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
//     document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
//     document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//     if (dateDiff < 0) {
//         clearInterval(counter);
//         card.classList.add("active");


//     }

// }, 1000)

let cardsContainer = document.querySelector(".blocks")
    cardss = cardsContainer.children, textD3wa = document.querySelectorAll(".cardd .back .text");
let text = document.querySelector(".back .text");
let blocks = Array.from(cardsContainer.children);


let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);


// blocks.forEach((block, index) => {

//     block.style.order = orderRange[index];

//     //Add Click Event
//     block.addEventListener('click', function () {

//             flipCardd(block)
//             textD3wa.forEach(function(ele) {
//                 ele.classList.remove("active");
//             })
//             eleZ.classList.add("active");
//     });
// });
let mesaText = document.querySelector(".cards h1");
textD3wa.forEach(function(eleZ){

    blocks.forEach((block, index) => {

        block.style.order = orderRange[index];
    
        //Add Click Event
        block.addEventListener('click', function () {
    
                flipCardd(block)
                mesaText.classList.add("active");
                textD3wa.forEach(function(ele) {
                    ele.classList.remove("active");
                })
                eleZ.classList.add("active");
        });
    });
  })    
//Flip block Function
function flipCardd(selectedBlock) {

        selectedBlock.classList.add('is-clicked'); 
       
      
}

 let feedback =  document.querySelector(".feedback")
     exit = document.querySelectorAll(".exit");

     exit.forEach(function(ele) {
        
        ele.onclick = function() {

            document.querySelector(".cards").remove()
            feedback.classList.add("active");
        
            }
     })
  

function shuffle(array) {

    let current = array.length,
        temp,
        random;

    while (current > 0) {
        random = Math.floor(Math.random() * current)
        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;
    }

    return array;
}

// el 7afla script

let nextOne = document.querySelector(".nex-intro-first"), slideOne = document.querySelector(".intro.firstt"),
    nextTwo = document.querySelector(".nex-first"), slideTwo = document.querySelector(".first"),
    nextThree = document.querySelector(".nex-intro-sec"), slideThree = document.querySelector(".intro.secondd"),
    nextFour = document.querySelector(".nex-intro-third"), slideFour = document.querySelector(".intro.thirdd"),
    nextFive = document.querySelector(".nex-third"), slideFive = document.querySelector(".third"),
    nextSix = document.querySelector(".nex-intro-fourth"), slideSix = document.querySelector(".intro.fourthh"),
    nextSeven = document.querySelector(".nex-fourth"), slideSeven = document.querySelector(".fourth"),
    nextEight = document.querySelector(".nex-intro-cards") , slideEight = document.querySelector(".intro.cardss"),
    slideNine = document.querySelector(".cards"), slideIntroQuiz = document.querySelector(".intro.quiz"),
    toQone = document.querySelector(".to-q-one"), slideQone = document.querySelector(".question.one"), 
    toQtwo = document.querySelector(".to-q-two"), slideQtwo = document.querySelector(".question.two"), 
    toQthree = document.querySelector(".to-q-three"), slideQthree = document.querySelector(".question.three"), 
    toQfour = document.querySelector(".to-q-four"), slideQfour = document.querySelector(".question.four"), 
    toQFive = document.querySelector(".to-q-five"), slideQfive = document.querySelector(".question.five"), 
    toQsix = document.querySelector(".to-q-six"), slideQsix = document.querySelector(".question.six"),
    toFaqrathird = document.querySelector(".to-third"),  elyB3do = document.querySelectorAll(".elyb3do")
    toIntroCards = document.querySelector(".to-intro-cards"), slideAmlteh = document.querySelector(".amlt-eh");

let prevOne = document.querySelector(".prev-first"), prevTwo = document.querySelector(".prev-intro-sec"),
    prevThree = document.querySelector(".prev-intro-third"), prevFour = document.querySelector(".prev-third"), 
    prevFive = document.querySelector(".prev-intro-fourth"), prevSix = document.querySelector(".prev-fourth"), 
    prevSeven = document.querySelector(".prev-intro-cards"),
    prevToamlteh = document.querySelector(".prev-to-amlteh");
  

let quran = document.querySelector(".quran"), meme = document.querySelector(".meme"),
    shokran = document.querySelector(".shokran"), elfat7a = document.querySelector(".elfat7a"),
    elyb3doAudio = document.querySelector(".elyb3do-audio");
     //go to intro one 
     prevOne.onclick = function () {
        slideOne.classList.remove("active");
        slideTwo.classList.remove("active");
        quran.pause();
     }

    //go to faqra one
    nextOne.onclick = function() {
        slideOne.classList.add("active");
        slideTwo.classList.add("active");
        Swal.fire("لن ينساڪ الله ، ان الله لا ينسى قلباً لجأ إليه . ❤️❤️ ");
        quran.play();
    }
    //--------//
    prevTwo.onclick = function () {
        slideTwo.classList.add("active");
        slideThree.classList.remove("active");
        quran.play();
        document.body.classList.remove("active");
        elfat7a.pause();
    }
    
    // go to  faqra two 
    nextTwo.onclick = function() {
        slideTwo.classList.remove("active");
        slideThree.classList.add("active");
        Swal.fire("۞ فَصَبْرٌ جَمِيلٌ وَاللَّهُ الْمُسْتَعَانُ ۞ وإنّ الله قادرٌ أن ينبت مكان الجُرح زَهراً. ");
        quran.pause();
        document.body.classList.add("active");
        elfat7a.play();
    }
    //--------//
    prevThree.onclick = function () {
        slideThree.classList.add("active");
        slideIntroQuiz.classList.remove("active");
        document.body.classList.add("active");
        elfat7a.play();
       
    }

    //go to faqra quiz 
    nextThree.onclick = function() {
        slideThree.classList.remove("active");
        slideIntroQuiz.classList.add("active");
        document.body.classList.remove("active");
        Swal.fire("فوض أمرك وأحلامك لله وامضِ بالحياة مطمئنًا موقنًا واثقًا بأن لا أحد يستطيع أن يغلق بابًا فتحه الله لك.♥️");
        elfat7a.pause();
       
    }
    //go to intro third 
    toFaqrathird.onclick = function() {
        slideQsix.classList.remove("active");
        slideFour.classList.add("active");
        Swal.fire("ازيك , انت مش مضطر تبهر حد، او تغير حاجة فى طبيعتك، انت جميل بكل حالاتك، و تستاهل تتشاف زى ما انت .. ❤️");
    }
     //--------//
     prevFour.onclick = function () {
        slideFour.classList.add("active");
        slideFive.classList.remove("active");
        meme.pause();
    }

    //go to faqra three 
    nextFour.onclick = function() {
        slideFour.classList.remove("active");
        slideFive.classList.add("active");
        Swal.fire("ثُم يرسل الله لقلبك نورًا ، كالذي أرسلهُ لعين يعقوب ");
        meme.play();
    }
     //--------//
     prevFive.onclick = function () {
        slideFive.classList.add("active");
        slideAmlteh.classList.remove("active");
        meme.play();
    }

    //go to amlt eh faqra
    nextFive.onclick = function() {
        slideFive.classList.remove("active");
        slideAmlteh.classList.add("active");
        Swal.fire("هــو ربُّ الــمُــســتــحــيــل وأنــت تــبــكــي عــلــى الــمُــمــكــن ؟");
        meme.pause();
    }

    // 
    prevToamlteh.onclick = function() {
        slideSix.classList.remove("active");
        slideAmlteh.classList.add("active");
    }
    //go to intro four 
    toIntroCards.onclick = function() {
        slideSix.classList.add("active");
        slideAmlteh.classList.remove("active");
        Swal.fire("كُن قويًا لأجل كُل أولئك الذين يرونك وطنًا يسكنون إليه.");
    }
    //--------//
      prevSix.onclick = function () {
        slideSix.classList.add("active");
        slideSeven.classList.remove("active");
        shokran.pause();
    }

    //go to faqra four 
    nextSix.onclick = function() {
        slideSix.classList.remove("active");
        slideSeven.classList.add("active");
        Swal.fire("أن يُتوَّج مسعانا بالوُصُولِ ، أَن نصِلَ رُغمَ طُولِ الطَّريقِ لمَا نُرِيدُ  ،  وألَّا يَخِيبَ لنَا أملٌ أبداً .")
        shokran.play();
    }
      //--------//
      prevSeven.onclick = function () {
        slideSeven.classList.add("active");
        slideEight.classList.remove("active");
        shokran.play();
    }

     //go to intro five 
    nextSeven.onclick = function() {
        slideSeven.classList.remove("active");
        slideEight.classList.add("active");
        Swal.fire("هـيـراضـينـي؟!  = هـيـراضـيـك والله، هيـراضـيـك بـأكتـر مـن اللـي اتمـنيـته وهيـعـوض صـبـرك خيـر، وهـيجبـرك جـبرا يلـيـق بـه، مـا خلـقنـا للـيـأس ومـا خـلـق الـيـأس لـنـا، خلقنا لنـخـوض الحياة مطمئنين وواثقين بـالله، لا يـكلـف الله نـفسـاً إلا وسـعهـا..مـتخـافـش انـت قـدهـا");
        shokran.pause();
    }

     //go to faqra five ( cards ) 
    nextEight.onclick = function() {
        slideEight.classList.remove("active");
        slideNine.classList.add("active");
        document.querySelector(".faqra-container.cardat").classList.add("active");
        Swal.fire("لمشوار طويل ورخم بس الحلم يستحق تتعب، وأڪيد هتوصل، مفيش حد بيتعب وفي الأخر بيجيب صفر، ربنا مبيخلقش حلم ف قلب حد ألا وهو عارف أنه يقدر يحققه♥️");

    }

    // el quiz 

    toQone.onclick = function() {
        slideIntroQuiz.classList.remove("active");
        slideQone.classList.add("active");
    }
    toQtwo.onclick = function() {
        slideQone.classList.remove("active");
        slideQtwo.classList.add("active");
        elyb3doAudio.play();

    }
    toQthree.onclick = function() {
        slideQtwo.classList.remove("active");
        slideQthree.classList.add("active");
        elyb3doAudio.play();

    }
    toQfour.onclick = function() {
        slideQthree.classList.remove("active");
        slideQfour.classList.add("active");
        elyb3doAudio.play();

    }
    toQFive.onclick = function() {
        slideQfour.classList.remove("active");
        slideQfive.classList.add("active");
        elyb3doAudio.play();

    }
    toQsix.onclick = function() {
        slideQfive.classList.remove("active");
        slideQsix.classList.add("active");
        elyb3doAudio.play();

    }

   // true and false answer

let   falseAnswer = document.querySelectorAll(".false"), falseAudio = document.querySelector(".false-audio"),
      trueAnswer = document.querySelectorAll(".true"), trueAudio = document.querySelector(".true-audio");

falseAnswer.forEach(function(ele) {
       
       ele.onclick = function() {

        ele.classList.add("active");
        falseAudio.play();
       
     }
})

trueAnswer.forEach(function(ele) {
       
        ele.onclick = function() {
 
         ele.classList.add("active");
         trueAudio.play();
        
      }
 })



// faqret amlt eh flip cart 

cart = document.querySelectorAll(".cart");
reset = document.querySelectorAll(".reset");
back = document.querySelectorAll(".cart .back");
front = document.querySelectorAll(".cart .front");

front.forEach((front) => {

    //Add Click Event
    front.addEventListener('click', function () {
      
            flipBlock (front) 

                                 
    });

  

});

back.forEach((back) => {

    //Add Click Event
    back.addEventListener('click', function () {
    
          resetCard (back) 
          
                               
      });
  });



//Flip block Function
function flipBlock(ele) {

            ele.parentElement.classList.add('active'); 
            Swal.fire('بقولك ايه لو عايز تشيل الصح دوس عليها تاني')

        
      
}
function resetCard(eleZ) {

        eleZ.parentElement.classList.remove("active"); 
      
}

// EL TAKREEEEM 

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > .slider-container");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {

    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
  });
});

