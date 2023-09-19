Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:99
});

camera = document.getElementById("camera");

Webcam.attach("camera");

console.log("ml5.version", ml5.version);

function capture_btn() 
{
    Webcam.snap(function(data_url)
    {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_url + "'>"
    })
}

classification = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7vVjVQf8t/model.json", ModelLoaded);