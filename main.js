Webcam.attach("#camera")

Webcam.snap(
    function(data_uri){
        document.getElementById("result").innerHTML = "<img id='snap' src='"+data_uri+"'></>"
    }

)