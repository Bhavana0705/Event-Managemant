//carosal1
let imgs=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg"]
let imgr=document.querySelector(".car img")
let dotr=document.querySelectorAll(".dot i")
let i=0

function fwd()
{
    console.log("hhh")
    
 dotr[i].className="fa-regular fa-circle"
 i=(i+1)%7
 dotr[i].className="fa-solid fa-circle"
 imgr.src=imgs[i]
}
function bkw()
{
    dotr[i].className="fa-regular fa-circle"
    i--
    if(i==-1){
        i=6
    }
    dotr[i].className="fa-solid fa-circle"
    imgr.src=imgs[i]
}
function seti(ind)
{
    dotr[i].className="fa-regular fa-circle"
    i=ind
    dotr[i].className="fa-solid fa-circle"
    imgr.src=imgs[i]
}
setInterval(fwd,2000)

//carosal2

let coustomer_imgs=["cimg1.jpeg","cimg2.jpeg","cimg3.jpg","cimg4.jpg","cimg5.jpg","cimg6.jpg","cimg7.jpg"]
let coustermer_imgr=document.querySelector(".carosal img")
let coustomer_dotr=document.querySelectorAll(".dot_c i")
let j=0

function fwdd()
{
    
coustomer_dotr[j].className="fa-regular fa-circle"
 j=(j+1)%7
 coustomer_dotr[j].className="fa-solid fa-circle"
 coustermer_imgr.src=coustomer_imgs[j]
}


function setj(ind)
{
    coustomer_dotr[j].className="fa-regular fa-circle"
    j=ind
    coustomer_dotr[j].className="fa-solid fa-circle"
    coustermer_imgr.src=coustomer_imgs[j]
}
setInterval(fwdd,7000)


//accondiance
let descr=document.getElementsByClassName("desc")
let ire=document.getElementsByClassName("abc")
let p=0
let que=(inn)=>{
    if(inn==p){
        if(ire[inn].classList.contains("fa-caret-up")){
            ire[inn].className="fa-solid fa-caret-down abc"
            descr[inn].style.display="none"
        }
        else{
            ire[inn].className="fa-solid fa-caret-up abc"
            descr[inn].style.display="block"
        }
    }
    else{
        ire[p].className="fa-solid fa-caret-down abc"
        descr[p].style.display="none"
        ire[inn].className="fa-solid fa-caret-up abc"
        descr[inn].style.display="block"
        p=inn
     }
    }

        


