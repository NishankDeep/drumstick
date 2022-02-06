
var allBtn=document.querySelectorAll(".drum");

for(var i=0;i<allBtn.length;i++){
    allBtn[i].addEventListener("click",function(){
        holdOn(this.innerHTML);
        anim(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    holdOn(event.key);
    anim(event.key);
});


// document.addEventListener("keyup",function(event){
//     console.log(event);
// });

function holdOn(buttonInnerHtml){
    // var buttonInnerHtml=this.innerHTML;
    
    switch(buttonInnerHtml){
        case "w":
            let tom1=new Audio("sounds/tom-1.mp3")
            tom1.play();
        break;

        case "a":
            let tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
        break;

        case "s":
            let tom3=new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;

        case "d":
            let tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
        break;

        case "j":
            let snare=new Audio("sounds/snare.mp3")
            snare.play();
        break;

        case "k":
            let crash=new Audio("sounds/crash.mp3")
            crash.play();
        break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3")
            kick.play();
        break;

        default:
            console.log(buttonInnerHtml);

    }

    // this keyword tell about the attribute or tag name which perform this 

    // console.log(this);

    // changing the color of text;
    // this.style.color="green";
}



function anim(pressedChar){
    var btnPressed=document.querySelector("."+pressedChar);

    btnPressed.classList.add("pressed");

    setTimeout(function(){
        btnPressed.classList.remove("pressed");
    },100);

    // btnPressed.classList.toggle("pressed");
}

// function animRmv(pressedch){
//     var btnPress=document.querySelector("."+pressedCh);

//     btnPress.classList.remove("pressed");

//     // btnPressed.classList.toggle("pressed");
// }
// function holdOn(){
//     // alert("Hello Guys");
//     var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
// }