
const add_form = document.querySelector('#add_form')
const loadData = document.querySelector('#loadData')


add_form.addEventListener('submit', function (e) {
    e.preventDefault()

    let form_data = new FormData(e.target)
    let form_entry = Object.fromEntries(form_data.entries())

    let {
        name,
        cel,
        photo,
        location
    } = form_entry

    let alldevs = []

    if (name == '' || cel == '' || photo == '' || location == '') {
        alert('All Feild Are Required !')
    } else {
        
       
        if(localStorage.getItem('Devs')){
            alldevs = JSON.parse(localStorage.getItem('Devs'))
        }else{
            alldevs = [] 
        }

        alldevs.push(form_entry)

        localStorage.setItem('Devs',JSON.stringify(alldevs))
        add_form.reset()
        getAlldata()
    }
})


function getAlldata() {
    let datas = JSON.parse(localStorage.getItem('Devs')) 
    let titem = '';
    datas.map((data, index) => {
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
           <td><img src="${photo}" alt="image"></td>
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

