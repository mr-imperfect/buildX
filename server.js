//Intersection observer

let allsection=document.querySelectorAll('.fade')
let secoption={
    root:null,
    rootMargin:'100px',
    threshold:0.25,
}

let sectionobserver=new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
           return
        }
            entry.target.classList.add('ani')
        
    })
},secoption)

allsection.forEach((sec)=>{
    sectionobserver.observe(sec)
})




const head=document.querySelector('.ham-click')

const ham=document.querySelector('.ham')
ham.addEventListener('click',()=>{
    head.classList.toggle('click')
       
})