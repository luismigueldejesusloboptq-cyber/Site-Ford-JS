let carouselArr = [];


class Carousel {
  constructor(image, title, link){
    this.image = image;
    this.title = title;
    this.link = link;
  }
  
  static Start(arr){

    Carousel._carouselDiv = document.getElementById("carousel");
    Carousel._carouselTitleDiv = document.getElementById("carousel-title");
    
    if(arr && arr.length > 0){
      Carousel._sequence = -1;
      Carousel._size = arr.length;
      
      Carousel.Next(); 
      
 
      Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
    } else {
      throw "O método Start precisa de um Array com itens.";
    }
  }

  static Next(){
    
     if (!Carousel._carouselDiv || !Carousel._carouselTitleDiv) {
      console.error("Elementos #carousel ou #carousel-title não encontrados no HTML.");
      clearInterval(Carousel._interval);
      return;
    } 
    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    const currentItem = carouselArr[Carousel._sequence];
    
    const imageHtml = `<a href="${currentItem.link}">
      <img src="img/${currentItem.image}" alt="${currentItem.title}">
    </a>`;
    
    const titleHtml = `<h2>${currentItem.title}</h2>`;
 
    Carousel._carouselDiv.innerHTML = imageHtml;
   Carousel._carouselTitleDiv.innerHTML = titleHtml;
 }
}