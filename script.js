// DOM
function addMovieToTable(movie) {
    const output = document.getElementById('output')

    let card = document.createElement('div')
    card.classList.add('card-group')
    card.classList.add('col-2')
    card.classList.add('bg-teal-400')
    card.classList.add('rounded')

    let img = document.createElement('div')
    img.classList.add('card-image')
    img.classList.add('mt-3')
    img.classList.add('img_resize')
    
    let imx = document.createElement('img')
    imx.classList.add('rounded')
    imx.setAttribute('src',movie.images.jpg.large_image_url)
    img.appendChild(imx)
    card.appendChild(img)

    let name = document.createElement('div')
    name.classList.add('card-name')
    name.classList.add('contain')
    name.classList.add('container')
    name.classList.add('width-100')
    name.classList.add('bg-gray-100')
    name.classList.add('mb-2')

    let flex = document.createElement('div')
    flex.classList.add('d-flex')
    flex.classList.add('flex-column')
    flex.classList.add('width-100')

    let cardBd = document.createElement('div')
    cardBd.classList.add('card-body')

    let a = document.createElement('a')
    a.classList.add('card-text')
    a.classList.add('h6')
    a.classList.add('text-center')
    a.classList.add('text-teal-700')
    a.innerHTML = movie.title
    cardBd.appendChild(a)

    let bt = document.createElement('div')
    bt.classList.add('row')
    bt.classList.add('justify-content-center')
    bt.classList.add('gap-3')
    bt.classList.add('my-3')

    let bt_d = document.createElement('button')
    bt_d.classList.add('btn')
    bt_d.classList.add('btn-outline-success')
    bt_d.classList.add('col-5')
    bt_d.innerHTML = 'Detail'
    bt.appendChild(bt_d)

    let bt_f = document.createElement('button')
    bt_f.classList.add('btn')
    bt_f.classList.add('btn-outline-success')
    bt_f.classList.add('col-5')

    let i = document.createElement('i')
    i.classList.add('bi')
    i.classList.add('bi-heart')
    i.classList.add('me-1')
    bt_f.appendChild(i)
    bt.appendChild(bt_f)

    flex.appendChild(cardBd)
    flex.appendChild(bt)
    name.appendChild(flex)
    card.appendChild(name)
    output.appendChild(card)
}

function onload() {
    fetch('https://api.jikan.moe/v4/seasons/now').then(response => {
        return response.json().then(data => {
            let movie = data.data
            console.log(movie)
            addMovie(movie)
        })
    })
}
    
function addMovie(movieList) {
    for (movies of movieList) {
        addMovieToTable(movies);
    }
}
    
    
