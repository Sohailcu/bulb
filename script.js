let imgON = document.getElementById("img");

    function img() {
        imgON.src = "./img/bulb.png";  // Change to your bulb ON image
        imgON.className = "styling";
        document.getElementById("on").style.display = 'none';  // Hide "On" button
        document.getElementById("off").style.display = 'inline';  // Show "Off" button
        document.getElementById("body").className = "backgroundOn";  // Switch to ON background
    }

    function imgOff() {
        imgON.src = "./img/Bulb_light_png-removebg-preview.png";  // Change to your bulb OFF image
        document.getElementById("on").style.display = 'inline';  // Show "On" button
        document.getElementById("off").style.display = 'none';  // Hide "Off" button
        document.getElementById("body").className = "backgroundOf";  // Switch to OFF background
    }