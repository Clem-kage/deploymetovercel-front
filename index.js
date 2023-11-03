
let area = document.querySelector('#year')
fetch(`https://deploymetovercel-liard.vercel.app/year`)
// fetch('http://localhost:3000/year')
.then(response => response.json())
.then((data)=>{
   area.textContent = data.yea
})