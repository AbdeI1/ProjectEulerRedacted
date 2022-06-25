var ansElement = document.getElementById("problem_answer").children[0].children[0].children[0].children[0]

if(ansElement && ansElement.className == 'strong') {
  const ans = ansElement.innerHTML
  ansElement.innerHTML = "REDACTED"
  ansElement.style.color = "red"
  let button = document.createElement("button")
  button.innerHTML = "Show Answer"
  button.type = "button"
  button.addEventListener("click", function() { 
    ansElement.style.color = ""
    ansElement.innerHTML = ans
    button.remove()
  })
  ansElement.parentElement.after(button)
}
