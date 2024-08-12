let form = document.forms['formulaire']

save = (e) => {
    e.preventDefault()
    data = new FormData(e.currentTarget)
    // console.log(data.toString())
    object = {}
    data.forEach((v,k) => {
        if(v.trim() == "" || k.trim() == ""){
            alert('Tsy mety')
        }
        else{
            object[k] = v
            fetch('http://localhost:3000/posts', {
                method : 'post',
                // mode : 'cors',
                body : JSON.stringify(object)
            })
        }
    })
}

form.addEventListener('submit', save)