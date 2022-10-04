// These constant and variables are used in the process of displaying an image preview.
const imageInput = document.querySelector("#uploaded-image");
var uploadedImage = "";

// This function is invoked when a user uploads an image. This functions uploads the 
// users uploaded image into an image preview box.
imageInput.addEventListener("change", function() {
    const imageReader = new FileReader();
    imageReader.addEventListener("load", () => {
        uploadedImage = imageReader.result;
        document.querySelector("#show-uploaded-image").style.backgroundImage = `url(${uploadedImage})`;
    });

    imageReader.readAsDataURL(this.files[0]);
});

// This function is invoked when a user uploads an image in the record form.
// When invoked the image preview box with the image and title is displayed and now visible
// after initially being hidden.
function showImagePreviewBox() {
    document.getElementById('show-uploaded-image').style.display = "block";
    document.getElementById('image-preview-title').style.display = "block";
}