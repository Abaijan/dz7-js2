
let filterSelectorSort = document.querySelector('.sort-select')
let row = document.querySelector('.products')
let url = 'http://localhost:8080/clothes?'

let filterSort = ''
filterSelectorSort.addEventListener('change', (e) => {
    e.preventDefault()
    filterSort = e.target.value;    
    getData()
})
console.log(filterSort)
async function getData() {
    row.innerHTML = ''
    fetch(url + `${filterSort.length ? 'popularity_like=' + filterSort + '&' : ''}`)
    .then(res => res.json())
    .then(res => {
        res.forEach(item => {
            row.innerHTML += `
            <div class="cart" key="${item.id}"> 
            <img src="${item.image}" alt="">
            <p class="product-name">${item.name}</p>
            <p class="product-price">$${item.price}</p>
            <image src="${item.favorite}" class="product-image">
            <img src="${item.rating}" alt="" class="rating-Img"/>
            <img src="${item.sale}" alt="" class="sale"/>
            </div> 
            `
        })
    }
    )
}

getData()
