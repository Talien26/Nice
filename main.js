
prediction_1 = ""
prediction_2 = ""


Webcam.set({
    width:350,
    height:300,
    image_frormat:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');