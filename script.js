// For Hamburger Men

const openNav = () => {
    document.getElementById("mobile-nav").style.width = "50%";
  }
  
const closeNav = () => {
    document.getElementById("mobile-nav").style.width = "0%";
  }


  // For Single Product page


const mainImage = document.getElementById("main-img");

const smallImage = document.getElementsByClassName("small-img");


smallImage[0].onclick = () => {
  mainImage.src = smallImage[0].src;
}

smallImage[1].onclick = () => {
  mainImage.src = smallImage[1].src;
}

smallImage[2].onclick = () => {
  mainImage.src = smallImage[2].src;
}

smallImage[3].onclick = () => {
  mainImage.src = smallImage[3].src;
}