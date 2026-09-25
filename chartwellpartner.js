const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

reveals.forEach((element) => {
    observer.observe(element);
});



//scrollup

const scrollUp = document.querySelector("#scrollupbutton");
window.addEventListener("scroll", function() {
if(window.scrollY > 500) {
    scrollupbutton.style.display = "block" ;
}

else {
    scrollupbutton.style.display = "none" ;
}
})

scrollupbutton.addEventListener("click" , function() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})



//stats countup

const stats = document.querySelectorAll(".trust-stats strong");

const statObserver = new IntersectionObserver((entries) => {
observer.observe(document.querySelector(".trust-stats"));

if(entries[0].isIntersecting) {
    stats.forEach((stat) => {
        const target = Number(stat.dataset.target);

        let count = 0 ;
        const interval = setInterval(() => {
            count ++;
            stat.textContent = count + "+";


            if(count === target) {
                clearInterval(interval)
            }
        }, 30);
    });
    statObserver.unobserve(entries[0].target);
}

});

statObserver.observe(document.querySelector(".trust-stats"));

