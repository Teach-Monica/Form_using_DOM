

function submit_form(event){
    // event.preventDefault()
    // console.log('form submitted');
    
}
var userDetail = document.querySelector('#user-details')

var form_tag = document.querySelector('#form')

form_tag.addEventListener('submit',form_submitted)

function form_submitted(event){
    event.preventDefault()
    console.log('form submitted');
    var name = document.querySelector('#form input[for="Name"]')
    var email = document.querySelector('#form input[for="Email"]')
    var password = document.querySelector('#form input[for="Password"]')
    
    // console.log("name",name.value);
    // console.log("email",email.value);
    // console.log("password",password.value);

    if(name.value != '' && email.value != '' && password.value != ''){

        var parentDiv = document.createElement('div')


        var h3Name = document.createElement('p')
        h3Name.innerText = `Name - ${name.value}`
        h3Name.setAttribute('for','name')
        parentDiv.append(h3Name)
    
        var h3email = document.createElement('p')
        h3email.innerText = `Email - ${email.value}`
        h3email.setAttribute('for','email')
        parentDiv.append(h3email)
    
        var h3password = document.createElement('p')
        h3password.innerText = `Password - ${password.value}`
        h3password.setAttribute('for','password')
        parentDiv.append(h3password)
    
        parentDiv.style.border = '2px solid red'
        parentDiv.style.margin = '10px'
        parentDiv.style.padding = '20px'
    
        userDetail.append(parentDiv)
    
        name.value = ''
        email.value = ''
        password.value = ''
    }
    else{
        console.log('inside else');
        var errorMsg = document.querySelector('.error-msg')
        errorMsg.style.display = 'block'
        errorMsg.innerText = 'No field should be empty'
        errorMsg.style.color = 'red'
        setTimeout(()=>{
            errorMsg.style.display = 'none'
        },5000)
    }

}