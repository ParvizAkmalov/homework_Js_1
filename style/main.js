// Birinchi misol
console.log("                                     1-Misol");

let oylik = 10000
console.log("Oylik  " + oylik);

let car = 3000
let carOne = oylik - car
console.log("Car  " + carOne);

let iphone = 670
let iphoneOne = oylik - iphone
console.log("Iphone " + iphoneOne);

let noutbook = 800
let noutbookOne = oylik - noutbook
console.log("Noutbook  " + noutbookOne);


let ostatok = oylik - car - iphone - noutbook
console.log("Qolgan Pul  " + ostatok);


let arenda = ostatok / 100 * 55
console.log("Arenda  " + arenda);


let chontakga = ostatok / 100 * 45
console.log("Cho'ntakga  " + chontakga);

// Ikkinchi
console.log("                                     2-Misol");

let BirKunlik = 6000
console.log("Bir Kunlik Pul  " + BirKunlik);

let food = BirKunlik / 100 * 30
console.log("Food  " + food);

let yolKira = BirKunlik / 100 * 20
console.log("Yo'l kira  " + yolKira);

let football = BirKunlik / 100 * 40
console.log("Football  " + football);

let QolganSuma = BirKunlik - food - yolKira - football
console.log("Qolgan Pul  " + QolganSuma);

let haftada = BirKunlik * 7
console.log("Bir Hafta Harajat  " + haftada);

let haftalikFoyda = QolganSuma * 7
console.log("Bir haftada cho'ntakga qolgan pul  " + haftalikFoyda);