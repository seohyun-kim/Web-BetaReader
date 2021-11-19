document.addEventListener("DOMContentLoaded", 
    function(e){
        var button = document.querySelector("input")

        var img = document.querySelector("img")
        var img1 = "image/hl 1.jpg"
        var img2 = "image/hl 2.jpg"
        var img3 = "image/profile.jpg"

        button.addEventListener('click', 
            function(e){
                var src = img.getAttribute("src")
                if (src === img1){
                    img.setAttribute("src", img2)
                } else if (src === img2) {
                    img.setAttribute("src", img3)
                } else {
                    img.setAttribute("src", img1)
                }
            }
        )
    }
)
