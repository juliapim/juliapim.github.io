// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';

// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });

  const aboutImage = document.querySelector('#julia_pic');
  const transparency = ()=>{
    
    aboutImage.style.opacity = 0.5;
  };

  const transparencyOut =()=>{
    aboutImage.style.opacity = 1;
  };

aboutImage.addEventListener('mouseover', transparency);
aboutImage.addEventListener('mouseout', transparencyOut);
  
//modal
const contactMe = document.querySelector('#modal');
const createModal = ()=>{
  const newSection = document.createElement('section');
  
};

contactMe.addEventListener('click', createModal);