

const faders= document.querySelectorAll('.fadein');

const sliders= document.querySelectorAll('.slide')

const appearOptions ={
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const apperaOnScroll = new IntersectionObserver
(function(entries, apperaOnScroll){
    entries.forEach( entry => {
        if(!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('appear');
            apperaOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    apperaOnScroll.observe(fader);
});

sliders.forEach(slider => {
    apperaOnScroll.observe(slider);
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
