

//carousel


//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, link){
        this.image = image
        this.title = title 
        this.link = link
    }

    
      
    static Start(arr){
    const carouselDiv = document.getElementById("carousel")
    const carouselTitleDiv = document.getElementById("carousel-title") 
        
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
       if (!carouselDiv || !carouselTitleDiv) {
        console.error("Elementos #carousel");
        clearInterval(Carousel._interval);
        return;
       } 
       Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;

       const currentItem = carouselArr[Carousel._sequence];
       const imageHtml = <a href="${currentItem.link}">
        <img src="${currentItem.image}" alt="${currentItem.title}"></img>
       </a>;
        const titleHtml = `<h2>${currentItem.title}</h2>`;

        carouselDiv.innerHTML = imageHtml;
        carouselTitleDiv.innerHTML = titleHtml;
    }
};
