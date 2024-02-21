const MobilemenucointainerTag=document.querySelector(".Mobilemenucointainer");
const line1Tag=document.querySelector(".line1");
const line2Tag=document.querySelector(".line2");
const line3Tag=document.querySelector(".line3");
const overlayTAag=document.querySelector(".overlay");
const liTag=document.getElementsByName("li");
MobilemenucointainerTag.addEventListener("click",()=>{
    if (MobilemenucointainerTag.classList.contains("isopened")){
        line2Tag.classList.remove("hideline2");
        line1Tag.classList.remove("rotateplus");
        line3Tag.classList.remove("rotateminuse");
        MobilemenucointainerTag.classList.remove("isopened");
        overlayTAag.classList.remove("showoverlay");
        for(let i=0;i<liTag.length;i++){
            liTag[i].classList.remove("animation");
        }
    } else{
        line2Tag.classList.add("hideline2");
        line1Tag.classList.add("rotateplus");
        line3Tag.classList.add("rotateminuse");
        MobilemenucointainerTag.classList.add("isopened");
        overlayTAag.classList.add("showoverlay");
        
        for(let i=0;i<liTag.length;i++){
            liTag[i].classList.add("animation");
            
        }
    }
    
})