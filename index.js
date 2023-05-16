let datum = '(nog geen keuze gemaakt)';
let aanvang= '(nog geen keuze gemaakt)'
//Aantal uren bakken
let tijd = document.getElementById("baktijd");
let baktijdKeuze = document.getElementById("baktijd-keuze");
count = 1.5;
function up() {
  count += 0.5;
  if (count >= 5) {
    count = 5;
  }
  baktijdKeuze.style.color = "blue";
  baktijdKeuze.innerHTML = `Je kiest voor ${count} uur bakken.`;
  tijd.innerText = count + " uur";
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}
function down() {
  count -= 0.5;
  if (count <= 1) {
    count = 1;
  }
  baktijdKeuze.style.color = "blue";
  baktijdKeuze.innerHTML = `Je kiest voor ${count} uur bakken.`;
  tijd.innerText = count + " uur";
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}

let aantal = document.getElementById("aantal");
let aantal_gasten = 35;
function downGasten() {
  aantal_gasten -= 5;
  if (aantal_gasten <= 10) {
    aantal_gasten = 10;
  }
  aantal.innerHTML = aantal_gasten;
  document.getElementById("aantalGasten").style.color = "blue";
  document.getElementById(
    "aantalGasten"
  ).innerText = `Je verwacht ongeveer ${aantal_gasten} gasten.`;
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}
function upGasten() {
  aantal_gasten += 5;
  if (aantal_gasten >= 100) {
    aantal_gasten = 100;
  }
  aantal.innerHTML = aantal_gasten;
  document.getElementById("aantalGasten").style.color = "blue";
  document.getElementById(
    "aantalGasten"
  ).innerText = `Je verwacht ongeveer ${aantal_gasten} gasten.`;
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}

let dateNow = new Date();
let yearNow = dateNow.getFullYear();
let monthNow = dateNow.getMonth() + 1;
let dayNow = dateNow.getDate();
monthNow < 10 ? (monthNow = `0${monthNow}`) : (monthNow = monthNow);
dayNow < 10 ? (dayNow = `0${dayNow}`) : (dayNow = dayNow);
dateNow = `${yearNow}-${monthNow}-${dayNow}`;
document.getElementById("date").value = dateNow;
document.getElementById("date").min = dateNow;
console.log(dateNow);

function getDate() {
  let dateEl = document.getElementById("date").value;
  console.log(dateEl);
  dateEl = new Date(dateEl);
  document.getElementById("dateTime").style.color = "blue";
  document.getElementById(
    "dateTime"
  ).innerHTML = `Je gekozen datum is ${dateEl.toLocaleDateString()}`;
  datum = `${dateEl.toLocaleDateString()}`;
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}

let tijdIndex = 12;

let startTijd = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];
function timeUp() {
  tijdIndex += 1;
  document.getElementById("aanvangsTijd").style.color = "blue";
  document.getElementById(
    "aanvangsTijd"
  ).innerHTML = `Je gekozen start-tijd is ${startTijd[tijdIndex]} uur`;
  document.getElementById("aanvang").innerHTML = `${startTijd[tijdIndex]} uur`;
  let aanvang = `${startTijd[tijdIndex]} uur`;
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}
function timeDown() {
  tijdIndex -= 1;
  document.getElementById("aanvangsTijd").style.color = "blue";
  document.getElementById(
    "aanvangsTijd"
  ).innerHTML = `Je gekozen start-tijd is ${startTijd[tijdIndex]} uur`;
  document.getElementById("aanvang").innerHTML = `${startTijd[tijdIndex]} uur`;
  let aanvang = `${startTijd[tijdIndex]} uur`;
  console.log("aanvang " + aanvang);
  offerte(uurPrijs, arrangement, count, aantal_gasten, city, datum, aanvang);
}

function sendMail() {
  let fromEmail = document.getElementById("email").value;
  let fromName = document.getElementById("name").value;
  let fromNumber = document.getElementById("number").value;
  let fromCity = document.getElementById("city").value;
  let fromSubject = document.getElementById("subject").value;
  let fromMessage = document.getElementById("message").value;

  const params = {
    fromEmail,
    fromName,
    fromNumber,
    fromCity,
    fromSubject,
    fromMessage,
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  if (validateEmail(fromEmail)) {
    sendEmail();
    console.log("Geldig email-adres");
  } else {
    //emailadres is ongeldig

    console.log("ongeldig email-adres");
    console.log();
    alert("Controleer of de invoer van je email adres juist is.");
  }

  function sendEmail() {
    const serviceID = "service_cf9lyxd";
    const templateID = "template_69kq5f8";
    console.log(params);

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";

        document.getElementById("city").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert(
          "Bedankt voor je bericht. We gaan direct aan de slag voor een reactie."
        );
      })
      .catch((error) => console.log(error));
  }
}

let background_not_selected = "white";
let background_selected = "rgba(255, 166, 0, 0.4)";
let arrangement = '"Luxe"';
let uurPrijs = 190;
// let city = "Utrecht";
let kosten = 145;
let afstand = 60;

document.getElementById("message1").innerText = `
Geen van de bovenstaande velden is verplicht, 
maar een e-mail adres is wel handig als je een reactie, een antwoord op een vraag of reserveren wilt. 
Het resultaat is pas bindend als wij een akkoord hebben gegeven.`;

let arrangementKeuze = document.getElementById("arrangemen-keuze");
function choiceArrangement(val) {
  let bakTijdEl = document.getElementById("baktijd").innerText;
  // console.log({ count });
  // console.log(bakTijdEl);
  // console.log(val);
  let uurPrijs = 0;
  if (val == "basic") {
    arrangementKeuze.style.color = "blue";
    arrangementKeuze.innerHTML = 'Je keuze is het "Basic" arrangement';
    arrangement = '"Basic"';
    uurPrijs = 170;
    offerte(uurPrijs, arrangement, count, aantal_gasten, city);
    document.getElementById("list-deco-basic").style.background =
      background_selected;
    document.getElementById("list-deco-luxe").style.background =
      background_not_selected;
    document.getElementById("list-deco-super").style.background =
      background_not_selected;
  } else if (val == "luxe") {
    arrangementKeuze.style.color = "blue";
    arrangementKeuze.innerHTML = 'Je keuze is het "Luxe" arrangement';
    arrangement = '"Luxe"';
    uurPrijs = 190;
    offerte(uurPrijs, arrangement, count, aantal_gasten, city);
    document.getElementById("list-deco-basic").style.background =
      background_not_selected;
    document.getElementById("list-deco-luxe").style.background =
      background_selected;
    document.getElementById("list-deco-super").style.background =
      background_not_selected;
  } else {
    arrangement = '"Super"';
    arrangementKeuze.style.color = "blue";
    arrangementKeuze.innerHTML = 'Je keuze is het "Super" arrangement';
    uurPrijs = 255;
    offerte(uurPrijs, arrangement, count, aantal_gasten, city);
    document.getElementById("list-deco-basic").style.background =
      background_not_selected;
    document.getElementById("list-deco-luxe").style.background =
      background_not_selected;
    document.getElementById("list-deco-super").style.background =
      background_selected;
  }
}

function gasten() {
  console.log(aantGasten.value);
  aantal_gasten = aantGasten.value;
  document.getElementById(
    "aantalGasten"
  ).innerText = `Je verwacht ongeveer ${aantal_gasten} gasten.`;
  offerte(uurPrijs, arrangement, count, aantal_gasten, city);
}

function offerte(
  uurPrijs,
  arrangement,
  count,
  aantal_gasten,
  city,
  datum,
  aanvang
) {
  afstand = Number(document.getElementById("travelDistance").innerHTML);
  console.log("afstand is: " + afstand);
  console.log(typeof afstand);
  let line1 = `De kosten voor ${count} uur bakken van het ${arrangement} arrangement bedraagt €${
    count * uurPrijs
  },=.
          
        `;
  let line2 = `De aftand Haarlem tot ${
    document.getElementById("to").value
  } is ${afstand} km
    De reis- en voorbereidingskosten bedragen € ${kosten},= 
    `;

  let line3 = `De totale kosten zullen naar schatting €${
    kosten + count * uurPrijs
  },= bedragen.
    
    `;
  let line4 = `Je verwacht ongeveer ${aantal_gasten} gasten.
    `;
  let line5 = `De kosten per persoon zullen gemiddeld €${(
    (kosten + count * uurPrijs) /
    aantal_gasten
  ).toFixed(2)} bedragen.
    `;
  let line6 = `Bakdatum ${datum} met als starttijd ${aanvang}
  
  `;

  let offerteText = line6 + line2 + line1 + line3 + line4 + line5;

  document.getElementById("message1").style.background = background_selected;
  document.getElementById("message1").innerText = offerteText;
}

// $(".timepicker").timepicker({
//   timeFormat: "h:mm p",
//   interval: 30,
//   minTime: "09:00",
//   maxTime: "10:00pm",
//   defaultTime: "17",
//   startTime: "09:00",
//   dynamic: false,
//   dropdown: true,
//   scrollbar: true,
// });
