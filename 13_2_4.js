document.addEventListener("DOMContentLoaded", 
    function(e){
        var input = document.querySelector("input")
        input.addEventListener('click', 
            function(e){
                if (e.target.getAttribute('type') === 'button'){
                    e.target.setAttribute('type', 'text')
                } 
            }
        )

        input.addEventListener('change', 
            function(e){
                e.target.setAttribute('type', 'button')
            }
        )
    }
)
