const QueryApi='https://imdb-api.projects.thetuhin.com/search?query=';

const OutputAPI='https://imdb-api.projects.thetuhin.com/title/';

const InputData=document.getElementById('UserInput')

function fetchData(value,query=true) {
    let api;
    if (query) {
        api=QueryApi
    }else api=OutputAPI


    fetch(api+value)
        .then(res=>res.json())
        .then(data=>console.log(data))
}
function findMovie(e) {
    e.preventDefault();
    // console.log(InputData.value)
    fetchData(InputData.value)
}