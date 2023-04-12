let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
console.log(hr);
function displayTime(){
  let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();
  let hRoation=30*hh+mm/2;
  let mRoation=6*mm;
  let sRoation=6*ss;
  hr.style.transform=`rotate(${hRoation}deg)`;
  min.style.transform=`rotate(${mRoation}deg)`;
  sec.style.transform=`rotate(${sRoation}deg)`;
  console.log(sRoation)
}
setInterval(displayTime,1000)