//movement


const card = document.querySelector('.card');
const container = document.querySelector('.container');


//Item 


const title = document.querySelector('.title');
const image = document.querySelector('.image img');
const desc = document.querySelector('.info h3')
const circle = document.querySelector('.circle');

const socialBtnUl = document.querySelector('.social-btn')
const socialBtn = document.querySelectorAll('.social-btn a');





//animation event

container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) /20 ;
    let yAxis = ((window.innerHeight / 2) - e.pageY)/20;

    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', e =>{
    
card.style.transition = 'none';
    title.style.transition = 'none';
    image.style.transition = 'none';
  desc.style.transition = 'none';

    //popout
    title.style.transform = "translateZ(150px)";
    image.style.transform = "translateZ(150px)";
    desc.style.transform = "translateZ(150px)";
    circle.style.transform = "translateZ(100px)";

});

container.addEventListener('mouseleave', e =>{
    card.style.transition = 'all 0.5s ease';
    title.style.transform = "translateZ(0px)";
    image.style.transform = "translateZ(0px)";
    desc.style.transform = "translateZ(0px)";
    circle.style.transform = "translateZ(0px)";
    title.style.transition = 'all 0.5s ease';
    image.style.transition = 'all 0.5s ease';
    desc.style.transition = 'all 0.5s ease';
    circle.style.transition = 'all 0.5s ease';
    card.style.transform =  `rotateY(0deg) rotateX(0deg)`;
});


//item out


//add classes to social media buttons about section

socialBtnUl.addEventListener('mouseover', (e)=>{
    for(let i = 0; i < socialBtn.length; i++){
        socialBtn[i].classList.add("box-shadow-out");
        socialBtn[i].classList.add("scale-out");
    }
});

// delete class from social media buttons
socialBtnUl.addEventListener('mouseleave', (e)=>{
    for(let i = 0; i < socialBtn.length; i++){
        socialBtn[i].classList.remove("box-shadow-out");
        socialBtn[i].classList.remove("scale-out");
    }
});


const btns = document.querySelectorAll('.btn_container .btn');

function fun(cNmae){
    const boxs = document.querySelectorAll('.box-container');
    console.log(boxs);
    for(let i = 0;  i < boxs.length; i++){
        if(boxs[i].classList[0] === cNmae){
            console.log(boxs[i].classList)
            btns[i].classList.add('box-shadow-out');
            boxs[i].style.transform = "translateX(0px)";
            boxs[i].style.opacity = "1";
            boxs[i].style.position= "relative";
            boxs[i].style.display = "grid";

        }
        else{
            btns[i].classList.remove('box-shadow-out');
            boxs[i].style.transform = "translateX(-100px";
            boxs[i].style.opacity = "0";
            boxs[i].style.position= "absolute";

        }
    }
}





//form handling code 


const cross = document.querySelector(".cross");
const formContainer = document.querySelector(".feedback-form")

const feedbackbtn = document.querySelector(".feedback")


cross.addEventListener("click", () => {
   
    formContainer.classList.toggle("showForm");
});

feedbackbtn.addEventListener("click", () => {
    formContainer.classList.toggle("showForm");
})



// MOUSE HANDLER
const mouseCursor = document.querySelector(".mouse__cursor")

window.addEventListener("mousemove", (e) => {
    mouseCursor.style.opacity = 0.5;
    const x = e.pageX;
    const y = e.pageY;

    mouseCursor.style.top = `${y}px`;
    mouseCursor.style.left = `${x}px`;

})


window.addEventListener("mouseout", () => {
    mouseCursor.style.opacity = 0;
    
})


// BOX ANIMATION SHOW CASE HANDLER
window.addEventListener("scroll", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight / 2) {
            box.classList.add("show")
        }
    })
})