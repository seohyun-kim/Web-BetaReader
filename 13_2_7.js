document.addEventListener("DOMContentLoaded",
    function(e){
        var button = document.querySelector("input")
        var p = document.querySelector("p")

        button.addEventListener("click", 
            function(e) {
                p.textContent = "JS로 입력함"
            }
        )
    }
)