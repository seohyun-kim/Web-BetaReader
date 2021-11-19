document.addEventListener("DOMContentLoaded", 
    function(e){
        var nameEditButton = document.querySelector("#nameEditButton")
        var editName = document.querySelector("#editNameField")
        var okButton = document.querySelector("#okButton")
        var newName = document.querySelector("#newName")
        var nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener('click', 
            function(e){
                editName.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )
        
        okButton.addEventListener('click', 
            function(e){
                nameHere.textContent = newName.value
                editName.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )
    }
)

