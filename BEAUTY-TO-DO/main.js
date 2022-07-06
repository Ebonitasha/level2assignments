const webSite = "https://api.vschool.io/eboni/todo"
const myForm = document.todoform
        // GET DATA
        function clear(){
            while(todoList.firstChild){
                todoList.removeChild(todoList.firstChild)
            }
        }
        
        getData()
        myForm.addEventListener("submit", function(e){
            e.preventDefault();
            const newtodo ={
                title: myForm.title.value, 
                price: myForm.price.value,
                description: myForm.description.value,
                imgUrl: myForm.image.value  
            }
            myForm.title.value = ""
            myForm.price.value = ""
            myForm.description.value = ""
            myForm.image.value = ""
                axios.post("https://api.vschool.io/eboni/todo/",newtodo)
                .then(res => getData())
                .catch(error => console.log(error))
        
        })
function getData() {
        axios.get("https://api.vschool.io/eboni/todo")
        .then(res => showData(res.data))
        .catch(err => console.log(err))
}
    
function showData(data) {
    clear()
    for(let i = 0; i < data.length; i++){
        const newLi = document.createElement('li')
        // NEW LIST ITEM
        // newLi.textContent = data[i].title
        // newLi.innerHTML += "<h1>"
        // newLi.style = 'font-size: 25px'
        document.getElementById('todoList').appendChild(newLi) 
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        newLi.appendChild(h1)
        if(data[i].completed === true){
            h1.style.color = "red";
            h1.style.textDecoration = "line-through"
        }
        //** This is the Image for the added item  */
        const img = document.createElement('img')
        img.setAttribute("src", data[i].imgUrl)
        img.setAttribute("width", "250px")
        img.setAttribute("height", "250px")
        newLi.appendChild(img)
//** This is the item decription */
        const description = document.createElement('p')
        description.textContent = `Description: ${data[i].description}`
        newLi.appendChild(description)
        // This is the price 
        const price = document.createElement('p')
        price.setAttribute('id', 'price')
        price.textContent = `$: ${data[i].price}`
        newLi.appendChild(price)
        const completed = document.createElement('input')
        completed.setAttribute("type", "checkbox")
        completed.style.height = '20px'
        completed.style.width = '20px'
        completed.setAttribute("name", "completed")
        completed.setAttribute("id", "completed")
        const completeLabel = document.createElement('label')
        completeLabel.setAttribute('for', 'completed')
        completeLabel.textContent = 'Task complete'
        completeLabel.style = 'font-size: 25px;'
        newLi.appendChild(completed)
        newLi.appendChild(completeLabel)
        completed.addEventListener('change', function (e) {
            e.preventDefault()
            if (this.checked) {
                axios.put(`https://api.vschool.io/eboni/todo/${data[i]._id}`, { 'completed': true })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                newLi.style.textDecoration = 'line-through'
                newLi.style.color = 'red'
            } else {
                axios.put(`https://api.vschool.io/eboni/todo/${data[i]._id}`, { 'completed': false })
                    .then(res => getData())
                    .catch(err => console.log(err))
                newLi.style.textDecoration = 'none'
            }
        })
   
        
        const deleteItem = document.createElement('button')
        deleteItem.setAttribute('type', 'button')
        deleteItem.setAttribute('id', 'deleteButton')
        deleteItem.textContent = 'Delete'
        deleteItem.style = 'text-decoration-color: white'
        deleteItem.style = 'width: 10%; background-color: white;'
        newLi.appendChild(deleteItem)
        deleteItem.addEventListener('click', function (e) {
            e.preventDefault()
            axios.delete(`https://api.vschool.io/eboni/todo/${data[i]._id}`)
                .then(res => getData())
                .catch(err => console.log(err))
        })
        const save = document.createElement('button')
            save.setAttribute('type', 'button')
            save.setAttribute('id', 'saveButton')
            save.textContent = "Save"
            newLi.appendChild(save)

            // save.addEventListener('click', function(e){
            //     e.preventDefault()
            //     axios.put(`https://api.vschool.io/eboni/todo/${data[i]._id}`, {
            //         'title': `${editTitle.value}`,
            //         'description': `${editDesc.value}`,
            //         'price': `${editPrice.value}`,
            //     })
            //         .then(res => getData())
            //         .catch(err => console.log(err))
            // })
            const editItem = document.createElement('button')
            editItem.setAttribute('type', 'button')
            editItem.setAttribute('id', 'editButton')
            editItem.textContent = 'Edit'
            newLi.appendChild(editItem) 
            

        editItem.addEventListener('click', function (e) {
            e.preventDefault()
            const editInfo = document.createElement('form')
            editInfo.setAttribute('name', 'editInfo')
            newLi.appendChild(editInfo)
            const newLabel = document.createElement('label')
            newLabel.textContent = 'Title :'
            const editTitle = document.createElement('input')
            editTitle.setAttribute('name', 'editTitle')
            editTitle.setAttribute('type', 'text')
            editTitle.setAttribute('placeholder', `${data[i].title}`)
            editTitle.value = editTitle.placeholder
            editInfo.appendChild(editTitle)
            const descLabel = document.createElement('label')
            descLabel.textContent = 'Description :'
            const editDesc = document.createElement('input')
            editDesc.setAttribute('name', 'editDesc')
            editDesc.setAttribute('type', 'text')
            editDesc.setAttribute('placeholder', `${data[i].description}`)
            editDesc.value = editDesc.placeholder
            editInfo.appendChild(editDesc)
            const priceLabel = document.createElement('label')
            priceLabel.textContent = 'Price :'
            const editPrice = document.createElement('input')
            editPrice.setAttribute('name', 'editPrice')
            editPrice.setAttribute('type', 'number')
            editPrice.setAttribute('placeholder', `${data[i].price}`)
            editPrice.value = editPrice.placeholder
            editInfo.appendChild(editPrice)
            // SAVE LABEL
            save.addEventListener('click', function(e){
                e.preventDefault()
                axios.put(`https://api.vschool.io/eboni/todo/${data[i]._id}`, {
                    'title': `${editTitle.value}`,
                    'description': `${editDesc.value}`,
                    'price': `${editPrice.value}`,
                })
                    .then(res => getData())
                    .catch(err => console.log(err))
            })
       
        })
   }   
}




