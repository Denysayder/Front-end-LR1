document.addEventListener("DOMContentLoaded", function () {
    var element1 = document.getElementById("element1");
    var element2 = document.querySelector(".element2");

    var clickState1 = false;
    var clickState2 = false;

    element1.addEventListener("click", function () {
        clickState1 = !clickState1;

        if (clickState1) {
            element1.style.backgroundColor = "blue";
            element1.style.color = "white";
        } else {
            element1.style.backgroundColor = "";
            element1.style.color = "";
        }
    });

    element2.addEventListener("click", function () {
        clickState2 = !clickState2;

        if (clickState2) {
            element2.style.backgroundColor = "green";
            element2.style.color = "white";
        } else {
            element2.style.backgroundColor = "";
            element2.style.color = "";
        }
    });

    document.getElementById("addBtn").addEventListener("click", function () {
        var input = document.createElement('input');
        input.type = 'file';

        input.addEventListener('change', function (event) {
            var file = event.target.files[0];

            if (file) {
                var reader = new FileReader();

                reader.onload = function (readerEvent) {
                    var newImage = new Image();
                    newImage.src = readerEvent.target.result;
                    newImage.id = 'cityImage';
                    newImage.alt = 'Uploaded Image';

                    var existingImage = document.getElementById('cityImage');
                    existingImage.parentNode.replaceChild(newImage, existingImage);
                };

                reader.readAsDataURL(file);
            }
        });

        input.click();
    });

    document.getElementById("increaseBtn").addEventListener("click", function () {
        var image = document.getElementById("cityImage");
        var currentSize = parseInt(window.getComputedStyle(image).getPropertyValue("width"));
        image.style.width = (currentSize * 1.2) + "px";
    });

    document.getElementById("decreaseBtn").addEventListener("click", function () {
        var image = document.getElementById("cityImage");
        var currentSize = parseInt(window.getComputedStyle(image).getPropertyValue("width"));
        image.style.width = (currentSize * 0.8) + "px";
    });

    document.getElementById("deleteBtn").addEventListener("click", function () {
        var image = document.getElementById("cityImage");
        image.style.display = "none";
    });
});
