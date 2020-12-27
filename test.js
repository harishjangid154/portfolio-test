function fun(cNmae){
    const boxs = document.querySelectorAll('.main div');
    for(let i = 0;  i < boxs.length; i++){
        if(boxs[i].classList[0] === cNmae){
            boxs[i].style.transform = "scale(1)";
            boxs[i].style.opacity = "1";
        }
        else{
        
            boxs[i].style.transform = "scale(0)";
            boxs[i].style.opacity = "0";
        }
    }
}