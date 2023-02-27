const button = document.getElementById('navBtn');

button.addEventListener('click',function(){
    if(navMain.style.width=='250px'){
        document.getElementById("navMain").style.width = "0px";
        return;
    } 
    else{
        document.getElementById("navMain").style.width = "250px";
        return;
    }
});
