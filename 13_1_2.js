document.addEventListener("DOMContentLoaded", 
    function(e){
        document.addEventListener('keydown',
            function(e){
                console.log(e.key)
                if (e.key === 'q'){
                    alert("this is Q!")
                }
            }
        )

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

