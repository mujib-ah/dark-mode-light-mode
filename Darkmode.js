let button = document.getElementById("btn");
button.addEventListener("click",
    function(){
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            button.textContent=("Light-mode  ☀");
        }
        else{
            button.textContent=("Dark-mode 🌙");
        }
    }
    
)