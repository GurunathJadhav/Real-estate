let people=document.getElementById('people');
let people_less=document.getElementById('people_less');
let people_more=document.getElementById('people_more');

let people_index=4;

people_less.addEventListener('click',()=>{
    people_index -=1;

    if(people_index <=0){
        people_index=1;
        people.value=people_index + ' People';
    }else{
        people.value=people_index + ' People';
    }
})

people_more.addEventListener('click',()=>{
    people_index +=1;
    if(people_index <=0){
        // people_index=6;
        people.value=people_index + ' People';
    }else{
        people.value=people_index + ' People';
    }
})
let checkoutdate=document.getElementById('checkout_date');
let checkout_date=document.getElementById('checkout');
let checkin_date=document.getElementById('checkindate');
let checkin=document.getElementById('checkin');

checkin.addEventListener('change',()=>{
    let checkin_value=checkin.value;
    let dates=new Date(checkin_value);
    let dates2=new Date();
    const week=['Sun','Mon','The','Wed','Thu','Fri','Sat'];
    let day=week[dates.getDay()];
    // console.log(day)

    let date=dates.getDate();
    // console.log(date)

    let months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month=months[dates.getMonth()];
    // console.log(month)

    if (dates < dates2) {
        // checkindate.innerText='No Dates'
        console.log("no dates")
    } else {
        checkin_date.innerText=day + ', '+date+' '+month;
    }
})

checkout.addEventListener('change',()=>{
    let checkout_value=checkout.value;
    let checkin_value=checkin.value;
    let dates=new Date(checkout_value);
    let dates2=new Date(checkin_value);
    const week=['Sun','Mon','The','Wed','Thu','Fri','Sat'];
    let day=week[dates.getDay()];
    // console.log(day)

    let date=dates.getDate();
    // console.log(date)

    let months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month=months[dates.getMonth()];
    // console.log(month)

    if (dates < dates2) {
        checkoutdate.innerText='No Dates'
    } else {
        // console.log(day + ', '+date+' '+month)
        checkoutdate.innerText= day + ', '+date+' '+month;
    }
})

let checkin_less =document.getElementById('checkin_less');
let checkin_more =document.getElementById('checkin_more');
let checkout_less =document.getElementById('checkout_less');
let checkout_more =document.getElementById('checkout_more');

checkin_more.addEventListener('click',()=>{
    const week=['Sun','Mon','The','Wed','Thu','Fri','Sat'];
    var months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let today=new Date();
    let tomorrow=new Date(today);

    tomorrow.setDate(tomorrow.getDate() +1);
    let day=week[tomorrow.getDay()];
    let date=tomorrow.getDate();
    let month=months[tomorrow.getMonth()];

    checkin_date.innerText= day + ', '+date+' '+month;
})

checkin_less.addEventListener('click',()=>{
    const week=['Sun','Mon','The','Wed','Thu','Fri','Sat'];
    var months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let today=new Date();
    // let tomorrow=new Date(today);

    // tomorrow.setDate(today.getDate() +1);
    let day=week[today.getDay()];
    let date=today.getDate();
    let month=months[today.getMonth()];

    checkin_date.innerText= day + ', '+date+' '+month;
})

checkout_more.addEventListener('click',()=>{
    const week=['Sun','Mon','The','Wed','Thu','Fri','Sat'];
    var months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let today=new Date();
    let tomorrow=new Date(today);

    tomorrow.setDate(tomorrow.getDate() +2);
    let day=week[tomorrow.getDay()];
    let date=tomorrow.getDate();
    let month=months[tomorrow.getMonth()];

    checkoutdate.innerText= day + ', '+date+' '+month;
})

checkout_less.addEventListener('click',()=>{
    const week=['Sun','Mon','The','Wed','Thu','Fri','Sat'];
    var months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let today=new Date();
    let tomorrow=new Date(today);

    tomorrow.setDate(tomorrow.getDate() +1);
    let day=week[tomorrow.getDay()];
    let date=tomorrow.getDate();
    let month=months[tomorrow.getMonth()];

    checkoutdate.innerText= day + ', '+date+' '+month;
})


const images=[
    "url(img/img9.jpg)no-repeat center/cover",
    "url(img/img8.jpg)no-repeat center/cover",
    "url(img/img4.jpg)no-repeat center/cover",
    "url(img/img5.jpg)no-repeat center/cover",
    "url(img/img6.jpg)no-repeat center/cover",
    "url(img/img2.jpg)no-repeat center/cover",
    "url(img/img3.jpg)no-repeat center/cover",
    "url(img/img1.jpg)no-repeat center/cover",
    "url(img/img11.jpg)no-repeat center/cover",
]

let index=1;
let h6=document.getElementById('h6');

h6.innerText="+" + images.length;

let left=document.getElementById('btn_left');
let right=document.getElementById('btn_right');
let style=document.getElementsByClassName('content')[0].style;
left.addEventListener('click',()=>{
    index -=1;
    if (index <0) {
        index=(images.length) -1;
    }
    style.setProperty('--background',images[index]);
})

right.addEventListener('click',()=>{
    index +=1;
    if (index >(images.length)-1) {
        index=0;
    }
    style.setProperty('--background',images[index]);
})
setInterval(()=>{
    index -=1;
    if (index <0) {
        index=(images.length) -1;
    }
    style.setProperty('--background',images[index]);
},3500);


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
