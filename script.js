import {Message} from "./models/Message.js"

let form = document.forms['formulaire']

const save = async (e) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let object = {}
    data.forEach((v,k) => {
        if(v.trim() == "" || k.trim() == ""){
            alert('Tsy mety')
            return
        }
        else{
            object[k] = v
        }
    })

    try {
        await Message.insert(object);
        form.reset()
        console.log('Message inséré avec succès');
    } catch (error) {
        console.log('Erreur dans script')
        console.error('Erreur lors de l\'insertion:', error);
    }
}

// // Recuperation des donnees
// async function getData() {
//     try{
//         const dataBrute = await fetch('http://localhost:3000/posts')
//         return await dataBrute.json()
//         // return await dataJson.body
//         // console.log(res)
//     }catch(e){
//         console.log('Bomboclatte')
//     }
//     // fetch('http://localhost:3000/posts', {method : 'get'}).then(a => a.json()).then(console.log)
// }

form.addEventListener('submit', save)