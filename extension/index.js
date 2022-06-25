var slider = document.getElementById("toggler")
if(slider) { slider.addEventListener("change", toggle); }

function toggle() {
  if(slider.checked) { 
    console.log("enabled")
  } else {
    console.log("disabled")
  }
}
