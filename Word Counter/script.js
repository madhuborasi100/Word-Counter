let input = document.getElementById("input")
let character = document.getElementById("character")
let word = document.getElementById("word")

input.addEventListener("input", ()=>{
	character.textContent = input.value.length;
	let txt = input.value.trim()
	word.textContent = txt.split(/\s+/).filter((item)=> item).length;
})