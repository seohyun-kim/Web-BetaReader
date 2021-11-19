document.addEventListener("DOMContentLoaded", 
    function(e){
        var input = document.querySelector("input")
        input.addEventListener('click', 
            function(e){
                e.target.setAttribute('type', 'text')
            }
        )
    }
)
