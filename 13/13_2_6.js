document.addEventListener("DOMContentLoaded", 
    function(e){
        var button = document.querySelector("input")
        var p = document.querySelector("p")

        button.addEventListener('click', 
            function(e){
                console.log(p.textContent)
            }
        )
    }
)
