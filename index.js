
  let imgBox = document.getElementById("imgBox");
  let qrImg = document.getElementById("qrImg");
  let qrText = document.querySelector("#qrText");
  let btn = document.getElementById("btn");

  qrText.addEventListener('input', () => {
    console.log('Input changed');
      if (qrText.value.length === 0) {
          imgBox.style.display = "none";
      } 
  });

  qrText.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) { // 13 is the key code for Enter key
          generateQR();
      }
  });

  function isValidURL(url) {
      // Regular expression to check if the input value is a URL
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlPattern.test(url);
  }

  btn.addEventListener('click', () => {
    console.log('Button clicked');
    generateQR();
});

  function generateQR() {
      let inputText = qrText.value.trim(); // Remove leading and trailing whitespace
      if (inputText.length > 0 && isValidURL(inputText)) {
          imgBox.style.display = "block";
          qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputText);
          imgBox.classList.add("show-img");
      } else {
          qrText.classList.remove('error'); // Remove the error class if the input is not empty
          if (inputText.length > 0) {
              qrText.classList.add('error'); // Add the error class if the input is not empty and contains an invalid URL
          }

          setTimeout(() => {
              qrText.classList.remove('error');
          }, 1000);
      }
  }
