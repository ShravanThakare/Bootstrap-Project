// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

let a = ["Shravan", "Utkarsha", "Teju"];

// a.forEach((value)=>(

//     console.log(value)

// ));

// let usd=[23,45,67];
// console.log(usd);

// let q=usd.map((value)=>{
//     value*60
// });
// console.log(q);

let obj = [
  {
    name: "Shravan",
    age: 23,
  },
  {
    name: "Utkarsha",
    age: 23,
  },
];

let s = obj.map((value) => value.name);

console.log(s);

const val=[1,2,370,80,90];

const r=val.filter((single)=>(single<10));
console.log(r);
