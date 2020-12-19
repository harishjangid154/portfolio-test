//movement


const card = document.querySelector('.card');
const container = document.querySelector('.container');


//Item 


const title = document.querySelector('.title');
const image = document.querySelector('.image img');
const desc = document.querySelector('.info h3')
const circle = document.querySelector('.circle');






//animation event

container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) / 25 ;
    let yAxis = ((window.innerHeight / 2) - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
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