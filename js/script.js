// ini javascript

//form validation
const form = document.getElementById('form');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const minatSelect = document.getElementById('minat');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const namaValue = namaInput.value.trim();
    const emailValue = emailInput.value.trim();
    const minatValue = minatSelect.value;

    // Validasi nama
    if (namaValue === '') {
        isValid = false;
        namaInput.nextElementSibling.textContent = 'Nama tidak boleh kosong';
    } else {
        namaInput.nextElementSibling.textContent = '';
    }

    // Validasi email
    if (emailValue === '' || !/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        isValid = false;
        emailInput.nextElementSibling.textContent = 'Email kosong atau tidak valid';
    } else {
        emailInput.nextElementSibling.textContent = '';
    }

    // Validasi minat
    if (minatValue === 'Select option') {
        isValid = false;
        minatSelect.nextElementSibling.textContent = 'Pilih minat tujuan';
    } else {
        minatSelect.nextElementSibling.textContent = '';
    }

    if (isValid) {
        alert('Halo '+namaValue+'. Formulirmu berhasil dikirim!');
    }
});

// Auto slideshow
let slideIndex = 0;
showDivs();
function showDivs() {
    let i;
    let imgList = document.getElementsByClassName("img-slideshow");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > imgList.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    imgList[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";  
    setTimeout(showDivs, 2000); // Change image every 2 seconds
}