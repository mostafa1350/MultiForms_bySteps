const slidePage = document.querySelector('.slidePage');
const firstNextBtn = document.querySelector('.firstNextBtn');

const firstPrevBtn = document.querySelector('.prev-1');
const secondNextBtn = document.querySelector('.next-1');

const secondPrevBtn = document.querySelector('.prev-2');
const thirdNextBtn = document.querySelector('.next-2');

const thirdPrevBtn = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.sumbmit');

const changeNameForm = document.querySelectorAll('.steps p');
const changeCheckForm = document.querySelectorAll('.steps .check');
const changeBullet = document.querySelectorAll('.steps .bullet');

let max = 4;
let current = 1;


// for Next buttons

firstNextBtn.addEventListener("click",()=>{
    slidePage.style.marginLeft= '-25%';    
    changeBullet[current-1].classList.add("active");
    changeCheckForm[current-1].classList.add("active");
    changeNameForm[current-1].classList.add("active");
    current +=1;
});

secondNextBtn.addEventListener("click",()=>{
    slidePage.style.marginLeft= '-50%';    
    changeBullet[current-1].classList.add("active");
    changeCheckForm[current-1].classList.add("active");
    changeNameForm[current-1].classList.add("active");

    current +=1;
});

thirdNextBtn.addEventListener("click",()=>{
    slidePage.style.marginLeft= '-75%';    
    changeBullet[current-1].classList.add("active");
    changeCheckForm[current-1].classList.add("active");
    changeNameForm[current-1].classList.add("active");

    current +=1;
});
submitBtn.addEventListener("click",()=>{
    changeBullet[current-1].classList.add("active");
    changeCheckForm[current-1].classList.add("active");
    changeNameForm[current-1].classList.add("active");
    current +=1;

    setTimeout(()=>{
        alert('sign up was Finish successfully ...')
        location.reload();
    },700);
});
// for Prev buttons

firstPrevBtn.addEventListener("click",()=>{
    slidePage.style.marginLeft= '0%';
    changeBullet[current-2].classList.remove("active");
    changeCheckForm[current-2].classList.remove("active");
    changeNameForm[current-2].classList.remove("active");

    current -=1;
});

secondPrevBtn.addEventListener("click",()=>{
    slidePage.style.marginLeft= '-25%';
    changeBullet[current-2].classList.remove("active");
    changeCheckForm[current-2].classList.remove("active");
    changeNameForm[current-2].classList.remove("active");

    current -=1;    
});

thirdPrevBtn.addEventListener("click",()=>{
    slidePage.style.marginLeft= '-50%';
    changeBullet[current-2].classList.remove("active");
    changeCheckForm[current-2].classList.remove("active");
    changeNameForm[current-2].classList.remove("active");

    current -=1;    
});


