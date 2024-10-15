
const accessKeyApi="oG7-wEkUqOk7H-iCZKP2b3ypPUUbojcvV8UgcqXp118";
// Storing Searching elements :
const SearchElemt=document.querySelector("form");
// Storing Input elements :

const InputElement=document.getElementById("search-data");

// Storing the Output of Searching :
const SearchOutputsElement=document.querySelector(".search-output");

// Getting Our Show more button :

const ShowMoreButton=document.getElementById("Show-more");

 let inputData="";//data is empty string right now
 let Page=1;//webpage number


 async function SearchImage() {
    // Getting input from user Which he Enter in the Search Bar
    inputData=InputElement.value;
    // creating a Dynamic Url & Variable for Searching
     const url=`https://api.unsplash.com/search/photos?page=${Page}&query=${inputData}&client_id=${accessKeyApi}`

   //   Fetching the data from Url  ^
   const Fetching=await fetch(url);
   // Converting Fetching Data Into Json() Format
   const data=await Fetching.json();

   
   // Storing the Json Data in the results variable
   const results=data.results;

   if (Page === 1) {
      SearchOutputsElement.innerHTML="";
   }
   // Mapping the the results :
   results.map((result)=>{

      // Creating the Div for New Result via Searching
      const ImageWrapper=document.createElement('div');
      ImageWrapper.classList.add("search-outputs");
      // Creatinh Image Tags for Photos 
      const image=document.createElement('img');
      image.src=result.urls.small
      image.alt=result.alt_description

      // Creating <a></a> tags for image link 
      const imageLinks=document.createElement("a");
      imageLinks.href=result.links.html;
      imageLinks.target="_blank";
      imageLinks.textContent=result.alt_description;


      ImageWrapper.appendChild(image);
      ImageWrapper.appendChild(imageLinks);
      SearchOutputsElement.appendChild(ImageWrapper);

   })
   Page++;
   if (Page > 1) {
      ShowMoreButton.style.display="block";
   }

 }


//   Adding the EventLister for Searching the Images whenever User will Submit the Input :

SearchElemt.addEventListener("submit",(event)=>{
   event.preventDefault();
   Page=1;
   SearchImage();
})

// adding the EVent Listner on the Show more Button for showinh the more Images whenever ShowMore button will be Clicked 

ShowMoreButton.addEventListener("click",()=>{
   SearchImage();
})