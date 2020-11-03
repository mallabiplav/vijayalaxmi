//Subtle text fade-in

const faders = document.querySelectorAll('.fade-in')

const fadeInOptions = {
    threshold: 0.8,
}
const fadeInObserver = new IntersectionObserver(
    function(entries,fadeInObserver){
        entries.forEach(entry =>{
            console.log(entry)
            if(!entry.isIntersecting){
                return
            }
            else{
                entry.target.classList.add("appear");
                fadeInObserver.unobserve(entry.target)

            }
        })

    },
    fadeInOptions
)

faders.forEach(fader => {
    fadeInObserver.observe(fader)
})



//Line Animation Our Blog

const line = document.querySelector('.blog-header')
const blogOptions = {
    threshold: 1
}

const blogObserver = new IntersectionObserver(
    function(entries,blogObserver){
        entries.forEach(entry =>{
            console.log(entry)
            if(!entry.isIntersecting){
                return
            }
            else{
                document.documentElement.style.setProperty('--blog-line-width', 3.5+'em');  
                blogObserver.unobserve(entry.target)

            }
        })

    },
    blogOptions
)

blogObserver.observe(line)



//Navigation Bar

const secondCollection = document.querySelector('.second-collection')
const navBar = document.querySelector('.nav-bar')
               
const navigationOptions = {}

const navigationObserver = new IntersectionObserver(
    function(entries, navigationObserver){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                navBar.classList.remove("nav-show")
            }
            else{
                navBar.classList.add("nav-show")
            }
        })
    },
    navigationOptions
)
navigationObserver.observe(secondCollection)