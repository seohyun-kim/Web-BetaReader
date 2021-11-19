document.addEventListener("DOMContentLoaded", 
    function(e){
        var keydown = document.querySelector("#keydown")
        keydown.addEventListener('keydown', 
            function(e){
                console.log(e.target.value)
            }
        )

        var change = document.querySelector("#change")
        change.addEventListener('change',
            function(e) {
                console.log(e.target.value)
            }
        )

        var input = document.querySelector('#input')
        input.addEventListener('input',
            function(e) {
                console.log(e.target.value)
            }
        )
    }
)

