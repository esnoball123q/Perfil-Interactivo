const fileInput = document.getElementById('fileInput');
const circle = document.getElementById('circle');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        circle.innerHTML = '';
        circle.appendChild(img);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
