// card 
function addMovieToTable(movie) {
    const output = document.getElementById('output')

    let card = document.createElement('div')
    card.classList.add('card-group')
    card.classList.add('col-xl-2')
    card.classList.add('col-lg-2')
    card.classList.add('col-md-3')
    card.classList.add('col-sm-6')
    card.classList.add('col-12')
    card.classList.add('bg-teal-400')
    card.classList.add('rounded')
    
    
    let img = document.createElement('div')
    img.classList.add('card-image')
    img.classList.add('mt-3')
    img.classList.add('width-100')
    
    let imx = document.createElement('img')
    imx.classList.add('rounded')
    imx.classList.add('img_resize')
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
    bt_d.addEventListener('click', function() {
        hidenAll()
        displayDetail()
        detail(movie)
    })

    let bt_f = document.createElement('button')
    bt_f.classList.add('btn')
    bt_f.classList.add('btn-outline-success')
    bt_f.classList.add('col-5')
    bt_f.addEventListener('click', function () {
        let confirmButton = confirm(`You want to add ${movie.title} to your favorites`)
        if (confirmButton) {
            bt_f.style.backgroundColor = 'darkgreen'
            const addFav = {
                id: '642110314',
                movie: {
                    url: movie.url,
                    image_url: movie.images.jpg.image_url,
                    title: movie.title,
                    synopsis: movie.synopsis,
                    type: movie.type,
                    episodes: movie.episodes,
                    score: movie.score,
                    rated: movie.rating,
                },
            };
            addToFav(addFav)
        }
    })

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

document.getElementById('searchButton').addEventListener('click', () => {
    let inputText = document.getElementById('search_query').value
    fetch(`https://api.jikan.moe/v4/anime?q=${inputText}`)
        .then(response => {
            return response.json()
        }).then(data => {
            let search = data.data
            console.log(search)
            output.innerHTML = ''
            addMovie(search)    
        })
})
   
document.getElementById('home').addEventListener('click', () => {
    hidenAll()
    displayCard()
    fetch('https://api.jikan.moe/v4/seasons/now').then(response => {
        return response.json().then(data => {
            let movie = data.data
            console.log(movie)
            output.innerHTML = ''
            addMovie(movie)
        })
    })
})
// detail
function detail(movie){
    const detailOutput = document.getElementById('output-detail') 

    let div1 = document.createElement('div')
    div1.classList.add('row')
    div1.classList.add('g-0')
    div1.classList.add('bg-gray-100')
    div1.classList.add('rounded')
    div1.classList.add('p-3')

    let div2 = document.createElement('div')
    div2.classList.add('col-md-4')
    div2.classList.add('h-100')

    let img1 = document.createElement('img')
    img1.classList.add('img-fluid')
    img1.classList.add('rounded-start')
    img1.setAttribute('src',movie.images.jpg.large_image_url)
    div2.appendChild(img1)
    div1.appendChild(div2)

    let div3 = document.createElement('div')
    div3.classList.add('col-md-8')

    let div4 = document.createElement('div')
    div4.classList.add('card-body')

    let p1 = document.createElement('p')
    p1.classList.add('card-title')
    p1.classList.add('h5')
    p1.classList.add('text-teal-900')
    p1.innerHTML = movie.title
    div4.appendChild(p1)

    let p2 = document.createElement('p')
    p2.classList.add('card-text')
    p2.classList.add('text-teal-700')
    p2.innerHTML = movie.synopsis
    div4.appendChild(p2)

    let div5 = document.createElement('div')
    div5.classList.add('row')
    div5.classList.add('justify-content-center')
    div5.classList.add('gap-3')

    let bt_back = document.createElement('button')
    bt_back.classList.add('btn')
    bt_back.classList.add('btn-outline-success')
    bt_back.classList.add('col-4')
    bt_back.innerHTML = 'Back'
    div5.appendChild(bt_back)
    bt_back.addEventListener('click', function(){
        hidenAll()
        displayCard()
    fetch('https://api.jikan.moe/v4/seasons/now').then(response => {
        return response.json().then(data => {
            let movie = data.data
            console.log(movie)
            output.innerHTML = ''
            addMovie(movie)
            })
        })
    })

    let bt_fav = document.createElement('button')
    bt_fav.classList.add('btn')
    bt_fav.classList.add('btn-outline-success')
    bt_fav.classList.add('col-4')
    bt_fav.addEventListener('click', function () {
        let confirmButton = confirm(`You want to add ${movie.title} to your favorites`)
        if (confirmButton) {
            bt_fav.style.backgroundColor = 'darkgreen'
            const addFav = {
                id: '642110314',
                movie: {
                    url: movie.url,
                    image_url: movie.images.jpg.image_url,
                    title: movie.title,
                    synopsis: movie.synopsis,
                    type: movie.type,
                    episodes: movie.episodes,
                    score: movie.score,
                    rated: movie.rating,
                },
            };
            addToFav(addFav)
        }
    })

    let i1 = document.createElement('i')
    i1.classList.add('bi')
    i1.classList.add('bi-heart')
    i1.classList.add('me-1')
    bt_fav.appendChild(i1)
    bt_fav.innerHTML += 'Add to favorites'
    div5.appendChild(bt_fav) 
    
    div3.appendChild(div4)
    div3.appendChild(div5)
    div1.appendChild(div3)
    div1.appendChild(div2)
    detailOutput.appendChild(div1)


}

// fav
function favorites(movie) {
    const Fav = document.getElementById('favorite')

    let card1 = document.createElement('div')
    card1.classList.add('card-group')
    card1.classList.add('col-xl-2')
    card1.classList.add('col-lg-2')
    card1.classList.add('col-md-3')
    card1.classList.add('col-sm-6')
    card1.classList.add('col-12')
    card1.classList.add('bg-teal-400')
    card1.classList.add('rounded')
    
    
    let img1 = document.createElement('div')
    img1.classList.add('card-image')
    img1.classList.add('mt-3')
    img1.classList.add('width-100')
    
    let imx1 = document.createElement('img')
    imx1.classList.add('rounded')
    imx1.classList.add('img_resize')
    imx1.setAttribute('src',movie.image_url)
    img1.appendChild(imx1)
    card1.appendChild(img1)

    let name1 = document.createElement('div')
    name1.classList.add('card-name')
    name1.classList.add('contain')
    name1.classList.add('container')
    name1.classList.add('width-100')
    name1.classList.add('bg-gray-100')
    name1.classList.add('mb-2')

    let flex1 = document.createElement('div')
    flex1.classList.add('d-flex')
    flex1.classList.add('flex-column')
    flex1.classList.add('width-100')

    let cardBd1 = document.createElement('div')
    cardBd1.classList.add('card-body')

    let aa = document.createElement('a')
    aa.classList.add('card-text')
    aa.classList.add('h6')
    aa.classList.add('text-center')
    aa.classList.add('text-teal-700')
    aa.innerHTML = movie.title
    cardBd1.appendChild(aa)

    let bt1 = document.createElement('div')
    bt1.classList.add('row')
    bt1.classList.add('justify-content-center')
    bt1.classList.add('gap-3')
    bt1.classList.add('my-3')

    let bt_delete = document.createElement('button')
    bt_delete.classList.add('btn')
    bt_delete.classList.add('btn-outline-danger')
    bt_delete.classList.add('col-5')
    bt_delete.innerHTML = 'Delete'
    bt1.appendChild(bt_delete)
    bt_delete.addEventListener('click', function() {
        let confirmButton = confirm(`You want to confirm Delete ${movie.title} form your favorites ?`)
        if (confirmButton) {
            deleteMov(movie.id)
        }
    })
    let bt_d = document.createElement('button')
    bt_d.classList.add('btn')
    bt_d.classList.add('btn-outline-success')
    bt_d.classList.add('col-5')
    bt_d.innerHTML = 'Detail'
    bt1.appendChild(bt_d)
    bt_d.addEventListener('click', function() {
        hidenAll()
        displayDetail()
        favorite.innerHTML = ''
        detailFav(movie)
    })

    flex1.appendChild(cardBd1)
    flex1.appendChild(bt1)
    name1.appendChild(flex1)
    card1.appendChild(name1)
    Fav.appendChild(card1)
}
document.getElementById('fav').addEventListener('click', () => {
    hidenAll()
    fetch('https://se104-project-backend.du.r.appspot.com/movies/642110314').then(response => {
        return response.json().then(data => {   
            output.innerHTML = ''
            addMovieFav(data)

        })
    })
});

function addMovieFav(movieList) {
    for (movies of movieList) {
        favorites(movies);
    }
}

function addToFav(movie) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movies/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log('success', data)
    })
}

function deleteMov(id) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=642110314&&movieId=${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`${data.title} is deleted`)
        fetch('https://se104-project-backend.du.r.appspot.com/movies/642110314').then(response => {
            return response.json().then(data => {
                console.log(data)
                favorite.innerHTML = ''
                addMovieFav(data)
            })
        })
    }).catch(error => {
        alert('your selected id has not in the database')
    })
}



var showCard = document.getElementById('showCard')
var showDetail = document.getElementById('showDetail')
var showOutputCard = document.getElementById('output')
var output_detail = document.getElementById('output-detail')
var outputFav = document.getElementById('favorite')
function hidenAll(){
    showCard.style.display = 'none'
    showDetail.style.display = 'none'
    outputFav.innerHTML = ''
    showOutputCard.innerHTML = ''
    output_detail.innerHTML = ''
}

function displayCard (){
    showCard.style.display = 'block'
}
function displayDetail (){
    showDetail.style.display = 'block'
}

function detailFav(movie){
    const detailOutput = document.getElementById('output-detail') 

    let div1 = document.createElement('div')
    div1.classList.add('row')
    div1.classList.add('g-0')
    div1.classList.add('bg-gray-100')
    div1.classList.add('rounded')
    div1.classList.add('p-3')

    let div2 = document.createElement('div')
    div2.classList.add('col-md-4')
    div2.classList.add('h-100')

    let img1 = document.createElement('img')
    img1.classList.add('img-fluid')
    img1.classList.add('rounded-start')
    img1.setAttribute('src',movie.image_url)
    div2.appendChild(img1)
    div1.appendChild(div2)

    let div3 = document.createElement('div')
    div3.classList.add('col-md-8')

    let div4 = document.createElement('div')
    div4.classList.add('card-body')

    let p1 = document.createElement('p')
    p1.classList.add('card-title')
    p1.classList.add('h5')
    p1.classList.add('text-teal-900')
    p1.innerHTML = movie.title
    div4.appendChild(p1)

    let p2 = document.createElement('p')
    p2.classList.add('card-text')
    p2.classList.add('text-teal-700')
    p2.innerHTML = movie.synopsis
    div4.appendChild(p2)

    let div5 = document.createElement('div')
    div5.classList.add('row')
    div5.classList.add('justify-content-center')
    div5.classList.add('gap-3')

    let bt_back = document.createElement('button')
    bt_back.classList.add('btn')
    bt_back.classList.add('btn-outline-success')
    bt_back.classList.add('col-4')
    bt_back.innerHTML = 'Back'
    div5.appendChild(bt_back)
    bt_back.addEventListener('click', function(){
        hidenAll()
        displayCard()
        fetch('https://se104-project-backend.du.r.appspot.com/movies/642110314').then(response => {
            return response.json().then(data => {
                console.log(data)
                favorite.innerHTML = ''
                addMovieFav(data)
            })
        })
    })

    let bt_delete = document.createElement('button')
    bt_delete.classList.add('btn')
    bt_delete.classList.add('btn-outline-danger')
    bt_delete.classList.add('col-5')
    bt_delete.innerHTML = 'Delete'
    div5.appendChild(bt_delete)
    bt_delete.addEventListener('click', function() {
        let confirmButton = confirm(`You want to confirm Delete ${movie.title} form your favorites ?`)
        if (confirmButton) {
            deleteMov(movie.id)
            detailOutput.innerHTML = ''
        }
    }) 
    
    div3.appendChild(div4)
    div3.appendChild(div5)
    div1.appendChild(div3)
    div1.appendChild(div2)
    detailOutput.appendChild(div1)


}