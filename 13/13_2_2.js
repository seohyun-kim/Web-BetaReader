document.addEventListener("DOMContentLoaded", 
    function(e){
        var input = document.querySelector("input")
        input.addEventListener('click', 
            function(e){
                console.log(e.target.getAttribute('type'))
            }
        )
    }
)
