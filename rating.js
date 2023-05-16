console.log("Hello Rating");
var count = 0;

function result() {
  if (count != 0) {
    // document.getElementById('result').innerHTML =
    //   "<h4>Rating: <label class='text-primary'>" +
    //   count +
    //   '</label></h4>' +
    //   '<h4>Review</h4>' +
    //   '<p style="border:solid 2px rgb(255, 180, 3);border-radius: 10px;background: rgb(241, 238, 238)" class="p-3">' +
    //   document.getElementById('review').value +
    //   '</p>'

    document.getElementById("review").value = "";
    document.getElementById("send").disabled = true;

    if (count == 1) {
      // alert(
      //   `Van deze super slechte waardering van ${count} ster schrik ik echt. Is iets echt helemaal fout gegaan...Hoop dat ik kom te weten wat..`
      // );
      Swal.fire({
        title: "Super slecht 1 ster",
        text: "Is iets echt helemaal fout gegaan...Hoop dat ik kom te weten wat..`",
        imageUrl:"https://images.pexels.com/photos/4629626/pexels-photo-4629626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: "Custom image",
      });
    
    } else if (count == 2) {
      // alert(
      //   `Van deze slechte waardering van ${count} sterren schrik ik echt. Is iets echt helemaal fout gegaan...Hoop dat le laat weten wat.`
      // );
    Swal.fire({
      title: "Niet echt super 2 sterren",
      text: "Dit kan echt niet...Wat is er niet goed gegaan.",
      imageUrl:
      "https://images.pexels.com/photos/4116521/pexels-photo-4116521.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: "Custom image",
    });
    } else if (count == 3) {
      Swal.fire({
      title: "Is een voldoende 3 sterren",
      text: "Maar moet echt beter kunnen. Misschien nog een goede tip?",
      imageUrl:
"https://images.pexels.com/photos/9486675/pexels-photo-9486675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",      imageWidth: 300,
      imageHeight: 250,
      imageAlt: "Custom image",
    });
    } else if (count == 4) {
      Swal.fire({
        title: "Ruim voldoende 4 sterren",
        text: "Prima resultaat. Op naar de 5.",
        imageUrl:
          "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: "Custom image",
      });
    } else if (count == 5) {
      Swal.fire({
        title: "Yippie 5 sterren",
        text: "Daar doen we het voor.",
        imageUrl:"https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        imageWidth: 300,
        imageHeight: 250,
        imageAlt: "Custom image",
      });
    }
  } else {
  }
}

function startRating(item) {
  count = item.id[0];
  sessionStorage.star = count;
  for (var i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById(i + 1).style.color = "rgb(255,180,0)";
    } else {
      document.getElementById(i + 1).style.color = "gray";
    }
  }
}
