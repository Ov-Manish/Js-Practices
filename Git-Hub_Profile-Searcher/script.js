let profileApi='https://api.github.com/users/'
const notFound=document.getElementById('notFound')
const loader=document.getElementById('loader')
const ErrorFound=document.getElementById('errorFound')
const showDataValues=document.querySelector('.card')
const inputData=document.getElementById('InputData')

function searchUser(e){
    e.preventDefault();
    showDataValues.style.display='none'
    ErrorFound.innerHTML=''
    notFound.style.display='none'
    loader.style.display='block'
    // console.log(inputData.value);
    // profileApi+=inputData.value;
    
    // loader.classList.remove('hidden')



    fetch(profileApi+inputData.value)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.message=="Not Found"){
                        notFound.style.display='block'
                    }else{
                        console.log(data);
                       showData(data)
                    }

                }).catch(e=>{
                    // If there will be an Api Error then the Error will show
                    ErrorFound.innerHTML= e
                }).finally(()=>{
                    loader.style.display='none'
                });
}

inputData.value="";
// second function :

function showData(data) {
    showDataValues.style.display='block'
    let innerHTML=`
     <div  class="card-Top">
                <img src="${data.avatar_url}" >
                    <div>
                        <h2>${data.name}</h2>
                        <h4>@${data.login}</h4>
                        <h4>followers <b>${data.followers}</b> </h4> 
                    </div>
    </div>
            <div class="card-bottom">
                <h4>${data.bio}</h4>
                    <div class="sides">
                        <a href="${data.html_url}">visite profile</a>
                        <p>repositories <b>${data.public_repos}</b></p>
                    </div>
            </div>
    `

        showDataValues.innerHTML=innerHTML
}


