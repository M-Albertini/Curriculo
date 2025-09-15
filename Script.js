function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // Ou a logica abaixo
  //if (html.classList.contains('light')) {

  //html.classList.remove('light')
  //} else{

  //html.classList.add ('light')

  const img = document.querySelector("#Profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/Avatar -Light.png")
  } else {
    img.setAttribute("src", "./Assets/Avatar.png")
  }
}
