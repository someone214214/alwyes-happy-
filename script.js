const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

const music = document.getElementById("music");

// tombol buka amplop
document.getElementById("startBtn").addEventListener("click",()=>{

    showPage("envelopePage");

    music.play().catch(()=>{});
});

// buka amplop
document.getElementById("envelope").addEventListener("click",()=>{

    document
    .getElementById("envelope")
    .classList.add("open");

    setTimeout(()=>{
        showPage("menuPage");
    },1000);

});

// menu
document.getElementById("galleryBtn").addEventListener("click",()=>{
    showPage("galleryPage");
});

document.getElementById("letterBtn").addEventListener("click",()=>{
    showPage("letterPage");
});

// tombol kembali
document.querySelectorAll(".backBtn").forEach(btn=>{

    btn.addEventListener("click",()=>{
        showPage("menuPage");
    });

});
