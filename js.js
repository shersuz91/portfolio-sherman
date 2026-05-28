const btn = document.getElementById('button');
const bar_btn = document.getElementById("bar_btn")
const nav = document.querySelector("nav")
const theme = document.getElementById("theme")
const darkTheme = document.getElementsByClassName("darkTheme")
const lightTheme = document.getElementsByClassName("lightTheme")
const switchThem = document.querySelectorAll(".switchThem")
const codeSkill = document.querySelectorAll(".codeSkill span")
var loading = document.getElementById("loading")
var loaded = document.getElementById("loaded")

window.addEventListener("load", function(){
loading.style.display="none"
loading.remove()
loaded.style.display="block"
})
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_hs3nlt5';
   const templateID = 'template_wdm1i29';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

window.addEventListener("click", function(e){
  console.log(e.target.closest("[barBtn]"))
  if (e.target.closest("[barBtn]")){
    nav.classList.toggle("show")
  }
  else{
    nav.classList.remove("show")

  }
})
theme.addEventListener("click", function(){

  Array.from(lightTheme).forEach(el => el.classList.toggle("d_none"));
  Array.from(darkTheme).forEach(el => el.classList.toggle("d_none"));
  switchThem.forEach((el)=>{
    el.classList.toggle("light")
    console.log(el)
  })
})

  
  var count_word = 0
  var count_letter = 0
  var text = ""
  var listtext = [codeSkill[0].textContent, codeSkill[1].textContent, codeSkill[2].textContent, codeSkill[3].textContent]
      codeSkill[0].textContent=""
      codeSkill[1].textContent=""
      codeSkill[2].textContent=""
      codeSkill[3].textContent=""
  
  setInterval(()=>{
    if(count_word < listtext.length){
      if(count_letter < listtext[count_word].length){
        codeSkill[count_word].textContent+=listtext[count_word][count_letter]
        count_letter+=1
      }
      else{
         codeSkill[count_word].textContent+="|"
        count_word+=1
        count_letter=0
      }
    }
    else{
      setTimeout(()=>{
        count_word = 0
      count_letter = 0
      text = ""
      codeSkill[0].textContent=""
      codeSkill[1].textContent=""
      codeSkill[2].textContent=""
      codeSkill[3].textContent=""
       codeSkill[count_word].textContent+=listtext[count_word][count_letter]
        count_letter+=1
      },250)
      
    }
  }, 250)
  
