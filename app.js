import Storage from "./src/Storage.js"

const add_form = document.querySelector('#add_form')
const loadData = document.querySelector('#loadData')


add_form.addEventListener('submit', function (e) {
    e.preventDefault()
    const form_data = new FormData(e.target)
    const form_entry = Object.fromEntries(form_data.entries())

    const {
        name,
        cel,
        photo,
        location
    } = form_entry

    if (name == '' || cel == '' || photo == '' || location == '') {
        alert('All Feild Are Required !')
    } else {

        Storage.set('Devs', form_entry)
        getAlldata()
        add_form.reset()
    }
})


function getAlldata() {
    let data = Storage.get('Devs')
    let titem = '';
    data.map((data, index) => {
        let {
            name,
            cel,
            photo,
            location
        } = data
        titem += `
        <tr>

           <td>${index + 1}</td> 
           <td>${name}</td>
           <td>${cel}</td>
           <td>${photo}</td>
           <td>${location}</td>
           <td>
             <button class="btn-close" onclick="alert(${ index })"></button>
           </td>
        
        </tr>
           
        `
    })

    loadData.innerHTML = titem;
}

getAlldata()












