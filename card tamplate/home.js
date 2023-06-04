
// //--------------------------------------------------------- last images hide when reach foote



// window.addEventListener("scroll", function() {
//     var footer = document.querySelector("footer");
//     var footerPosition = footer.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;
//     var img = document.querySelector(".r34");
//     var img = document.querySelector(".r35"); // Replace "image-class" with the actual class name of the image

//     if (footerPosition < windowHeight) {
//       // Footer is visible in the viewport
//       img.style.display = "none";
//     } else {
//       // Footer is not visible in the viewport
//       img.style.display = "block";
//     }
//   });





// // -------------------------------------------------------------------  padding from bottom

///    INPUT WORD IN INPUT FIELD ABOUT YOUR COMPANY










///    INPUT WORD IN INPUT FIELD ABOUT YOUR COMPANY





window.addEventListener("scroll", function () {
  var footer = document.querySelector("footer");
  var footerPosition = footer.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var elementsAboveFooter = document.querySelectorAll(".home"); // Replace with the appropriate selector for the elements above the footer

  if (footerPosition < windowHeight) {
    // Footer is visible in the viewport
    elementsAboveFooter.forEach(function (element) {
      element.style.paddingBottom = " 80px";
    });
  } else {
    // Footer is not visible in the viewport
    elementsAboveFooter.forEach(function (element) {
      element.style.paddingBottom = "0";
    });
  }
});
























//data featch javascript================================================



window.addEventListener("load", () => {
  const name = localStorage.getItem("companyName");
  const wyd = localStorage.getItem("companyWyd");
  const logo = localStorage.getItem("companyLogo");
  const Add = localStorage.getItem("companyAdd");
  const Phone = localStorage.getItem("companyPhone");
  const Email = localStorage.getItem("companyEmail");

  const CustProd = localStorage.getItem("companyCustProd");
  const CustProdDec= localStorage.getItem("companyCustProdDec");
  const CustProdPrice= localStorage.getItem("companyCustProdPrice");

  const CustReview1 = localStorage.getItem("companyCustReview1");
  const CustRewLoc1 = localStorage.getItem("companyCustRewLoc1");
  const CustRewDec1 = localStorage.getItem("companyCustRewDec1");
  const CustReview2 = localStorage.getItem("companyCustReview2");
  const CustRewLoc2 = localStorage.getItem("companyCustRewLoc2");
  const CustRewDec2 = localStorage.getItem("companyCustRewDec2");
  const CustReview3 = localStorage.getItem("companyCustReview3");
  const CustRewLoc3 = localStorage.getItem("companyCustRewLoc3");
  const CustRewDec3 = localStorage.getItem("companyCustRewDec3");





  document.getElementById("C-NameT").innerHTML = name;
  document.getElementById("what-you-doT").innerHTML = wyd;
  document.getElementById("userImageT").src = logo;
  document.getElementById("C-AddT").innerHTML = Add;
  document.getElementById("C-PhoneT").innerHTML = Phone;
  document.getElementById("C-EmailT").innerHTML = Email;
  document.getElementById("C-ProdT").innerHTML = CustProd;
  document.getElementById("C-Prod-DecT").innerHTML = CustProdDec;
  document.getElementById("C-Prod-PriceT").innerHTML = CustProdPrice;

  document.getElementById("C-Rname1T").innerHTML = CustReview1;
  document.getElementById("C-Rew-Loc1T").innerHTML = CustRewLoc1;
  document.getElementById("C-Rew-Dec1T").innerHTML = CustRewDec1;
  document.getElementById("C-Rname2T").innerHTML = CustReview2;
  document.getElementById("C-Rew-Loc2T").innerHTML = CustRewLoc2;
  document.getElementById("C-Rew-Dec2T").innerHTML = CustRewDec2;
  document.getElementById("C-Rname3T").innerHTML = CustReview3;
  document.getElementById("C-Rew-Loc3T").innerHTML = CustRewLoc3;
  document.getElementById("C-Rew-Dec3T").innerHTML = CustRewDec3;









  //// INSTAGRAME URL JAVASCRIPT STARTING=================================

  const instaUrl = localStorage.getItem("companyInstaUrl");
  const instaLink = document.getElementById("C-InstaT");
  instaLink.href = instaUrl;


  /////INSTAGRAME URL JAVASCRIPT ENDING ===================================


  //// FACEBOOK URL JAVASCRIPT STARTING=================================

  const faceUrl = localStorage.getItem("companyFaceUrl");
  const faceLink = document.getElementById("C-FaceT");
  faceLink.href = faceUrl;


  /////FACEBOOK URL JAVASCRIPT ENDING ===================================






 //// WHATSAPP URL JAVASCRIPT STARTING=================================

  const whatsappNumber = localStorage.getItem("companyWhatsAppNumber");
  const whatsappLink = document.getElementById("C-WPhoneT");
  whatsappLink.href = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;



 /////WHATSAPP URL JAVASCRIPT ENDING ===================================



})

//// ADDRESS REDIRECT TO GOOGLE MAP JAVASCRIPT STARTING ===================================

const Add = localStorage.getItem("companyAdd");
document.getElementById("C-AddT").innerHTML = Add;

const addressIcon = document.getElementById("C-AddressIcon");
addressIcon.addEventListener("click", () => {
  const encodedAddress = encodeURIComponent(Add);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  window.open(googleMapsUrl, "_blank");
});


//// ADDRESS REDIRECT TO GOOGLE MAP JAVASCRIPT ENDING ===================================


//// PHONE NUMBER REDIRECT TO GOOGLE MAP JAVASCRIPT STARTING ===================================

const Phone = localStorage.getItem("companyPhone");
document.getElementById("C-PhoneT").innerHTML = Phone;

const phoneIcon = document.getElementById("C-PhoneIcon");
phoneIcon.addEventListener("click", () => {
  window.location.href = `tel:${Phone}`;
});



//// PHONE NUMBER REDIRECT TO GOOGLE MAP JAVASCRIPT ENDING ===================================


////  EMAIL APPLICATION REDIRECT TO GOOGLE MAP JAVASCRIPT STARTING ===================================

const Email = localStorage.getItem("companyEmail");
document.getElementById("C-EmailT").innerHTML = Email;

const emailIcon = document.getElementById("C-EmailIcon");
emailIcon.addEventListener("click", () => {
  window.location.href = `mailto:${Email}`;
});



////  EMAIL APPLICATION REDIRECT TO GOOGLE MAP JAVASCRIPT ENDING ===================================







//  RUPEE ICON SHOW
const price = document.getElementById("C-Prod-PriceT").textContent;
console.log(price); // Output: 1245













window.addEventListener('load', () => {
  const imageSrc = localStorage.getItem('companyCustProdImg');
  const pImageT = document.getElementById('pImageT');

  if (imageSrc) {
    pImageT.src = imageSrc;
  }

  // Rest of your code...
});





/// REVIEW SECTION JAVASCRIPT STARTING =================================================


window.addEventListener('load', () => {
  const imageSrc = localStorage.getItem('companyCustProdImg');
  const pImageT = document.getElementById('Rew-Image1T');

  if (imageSrc) {
    pImageT.src = imageSrc;
  }

  // Rest of your code...
});



/// REVIEW SECTION JAVASCRIPT ENDING =================================================
