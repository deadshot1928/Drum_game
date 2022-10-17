var drumlist=document.querySelectorAll(".drum");
var n=drumlist.length;

for(var i=0;i<n;i++)
{
    drumlist[i].addEventListener("click",function(){
        var char=this.innerHTML;

        playS(char);
        animate(char);

    });
}

document.addEventListener("keydown",function(event){
    playS(event.key);
    animate(event.key);
});

function playS(char)
{
    switch(char)
        {
            case "w":
                var aud_name="sounds/tom-1.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;
            case "a":
                var aud_name="sounds/tom-2.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;
            case "s":
                var aud_name="sounds/tom-3.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;
            case "d":
                var aud_name="sounds/tom-4.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;
            case "j":
                var aud_name="sounds/crash.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;
            case "k":
                var aud_name="sounds/kick-bass.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;
            case "l":
                var aud_name="sounds/snare.mp3";
                var sound = new Audio(aud_name);
                sound.play();
                break;   
        }
}

function animate(char)
{
    document.querySelector("."+char).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+char).classList.remove("pressed");
    },100);
}