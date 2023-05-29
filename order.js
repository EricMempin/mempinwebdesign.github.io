const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const address = document.querySelector("#address");

const spiderquantity = document.querySelector("#spider-qty");
const dogquantity = document.querySelector("#dog-qty");
const catquantity = document.querySelector("#cat-qty");
const parrotquantity = document.querySelector("#parrot-qty");
const rabbitquantity = document.querySelector("#rabbit-qty");
const turtlequantity = document.querySelector("#turtle-qty");
const guineapigquantity = document.querySelector("#guineapig-qty");
const chickenquantity = document.querySelector("#chicken-qty");
const coyfishquantity = document.querySelector("#coyfish-qty");
const pigeonquantity = document.querySelector("#pigeon-qty");
const lovebirdquantity = document.querySelector("#lovebird-qty");
const goldfishquantity = document.querySelector("#goldfish-qty");



const spiderPriceText = document.querySelector("#spider-price-text");
const dogPriceText = document.querySelector("#dog-price-text");
const catPriceText = document.querySelector("#cat-price-text");
const parrotPriceText = document.querySelector("#parrot-price-text");
const rabbitPriceText = document.querySelector("#rabbit-price-text");
const turtlePriceText = document.querySelector("#turtle-price-text");
const guineapigPriceText = document.querySelector("#guineapig-price-text");
const chickenPriceText = document.querySelector("#chicken-price-text");
const coyfishPriceText = document.querySelector("#coyfish-price-text");
const pigeonPriceText = document.querySelector("#pigeon-price-text");
const lovebirdPriceText = document.querySelector("#lovebird-price-text");
const goldfishPriceText = document.querySelector("#goldfish-price-text");

const totalPrice = document.querySelector("#total-price");

function calcQty() {
  let total = 0;
  spiderPriceText.innerHTML = `PHP ` + spiderquantity.value * 1000;
  dogPriceText.innerHTML = `PHP ` + dogquantity.value * 1000;
  catPriceText.innerHTML = `PHP ` + catquantity.value * 800;
  parrotPriceText.innerHTML = `PHP ` + parrotquantity.value * 600;
  rabbitPriceText.innerHTML = `PHP ` + rabbitquantity.value * 400;
  turtlePriceText.innerHTML = `PHP ` + turtlequantity.value * 500;
  guineapigPriceText.innerHTML = `PHP ` + guineapigquantity.value * 400;
  chickenPriceText.innerHTML = `PHP ` + chickenquantity.value * 800;
  coyfishPriceText.innerHTML = `PHP ` + coyfishquantity.value * 500;
  pigeonPriceText.innerHTML = `PHP ` + pigeonquantity.value * 200;
  lovebirdPriceText.innerHTML = `PHP ` + lovebirdquantity.value * 200;
  goldfishPriceText.innerHTML = `PHP ` + goldfishquantity.value * 100;

  total =
    spiderquantity.value * 1000 +
    dogquantity.value * 1000 +
    catquantity.value * 800 +
    parrotquantity.value * 600 +
    rabbitquantity.value * 400 +
    turtlequantity.value * 500 +
    guineapigquantity.value * 400 +
    chickenquantity.value * 800 +
    coyfishquantity.value * 500 +
    pigeonquantity.value * 200 +
    lovebirdquantity.value * 200 +
    goldfishquantity.value * 100;

  totalPrice.innerHTML = `PHP ` + total;
}

function processOrder() {
  let total = 0;
  total =
    spiderquantity.value * 1000 +
    dogquantity.value * 1000 +
    catquantity.value * 800 +
    parrotquantity.value * 600 +
    rabbitquantity.value * 400 +
    turtlequantity.value * 500 +
    guineapigquantity.value * 400 +
    chickenquantity.value * 800 +
    coyfishquantity.value * 500 +
    pigeonquantity.value * 200 +
    lovebirdquantity.value * 200 +
    goldfishquantity.value * 100;
  if (fName.value != "" && lName.value != "" && address.value != "") {
    alert(
      `${fName.value} ${lName.value} with Total Order of ${total} will be delivered to ${address.value}`
    );
  }
}
