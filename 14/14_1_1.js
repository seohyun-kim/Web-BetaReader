document.addEventListener("DOMContentLoaded", 
    function(e){
        var configID = document.querySelector("#id i")
        var idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )
    }
)