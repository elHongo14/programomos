const memes_m = document.getElementById('memes')
const meme_m = document.getElementById('meme').content
const fragment = document.createDocumentFragment()

let memes = []

document.addEventListener('DOMContentLoaded', () => {
    cargaMemes()
})

const cargaMemes = () => {
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '90240bd1a1mshe56d194fdf578dfp109582jsn7912e5585c2b',
		    'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	    }
    };

    fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
	    .then(response => response.json())
	    .then(response => {
            memes = response
            dibujaMemes()
            console.log(response)
        })
	    .catch(err => console.error(err));
}

const dibujaMemes = () => {
    memes.forEach((item) => {
        meme_m.querySelector('p').textContent = item.id
        meme_m.querySelector('img').setAttribute('src', item.image)
        meme_m.querySelector('h3').textContent = item.created
        const clone = meme_m.cloneNode(true)
        fragment.appendChild(clone)
    })
    memes_m.appendChild(fragment)
}