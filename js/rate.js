const stars = document.querySelectorAll('.classification span')

stars.forEach(star => {
    star.addEventListener('click', ()=> {
        const starClicked = star

        for(const star of stars) {
            star.setAttribute('class','far fa-star')
            star.classList.remove('active')
        }
        for(const star of stars) {
            if(star.isEqualNode(starClicked)) {
                star.setAttribute('class', 'fas fa-star')
                star.classList.add('active')
            } else break
        }
    })
})