// Code for the web cam app 
// const webCamElement = document.getElementById("webCam");
// const canvasElement = document.getElementById("canvas");
// const webcam = new Webcam(webCamElement, "user", canvasElement);

// webcam.start();

// function takeAPicture(){
//     let picture = webcam.snap();
//     document.querySelector("a").href = picture;
// }


// Code for the uploaded image preview
const imageInput = document.querySelector("#uploaded-image"); 
var uploadedImage = "";

imageInput.addEventListener("change", function()
{
    const imageReader = new FileReader();
    imageReader.addEventListener("load", () =>
    {
        uploadedImage = imageReader.result;
        document.querySelector("#show-uploaded-image").style.backgroundImage = `url(${uploadedImage})`;
    });

    imageReader.readAsDataURL(this.files[0]);
});
