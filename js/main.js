
const options = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmFjMTQ5NGM3NGM4NTZhNTJjZmFjMTllN2M2NjRjYSIsIm5iZiI6MTc0Mjg3MDc2Ny44MTIsInN1YiI6IjY3ZTIxOGVmNGM1Mjc0NjY2NWRjNzc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hKkscFv4J3_bT6mZBvu-ZtRD4xfVN22kuA_2lbyEmtg'
    }
};



function toggleLoading(){
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == 'none' ? 'block' : 'none';
}

window.addEventListener("scroll", function(){
    const navbar = this.document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove('scrolled');
    }
})