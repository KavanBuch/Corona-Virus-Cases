function updateMap() {
  console.log("Updating time with real time data");
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      for (const element of rsp.data) {
        let latitude = element.latitude;
        let longitude = element.longitude;
        let colour;
        let cases = element.infected;
        if (cases > 255) {
          colour = "rgb(255, 0, 0)";
        } else if (cases < 255) {
          colour = `rgb(${cases},0,0)`;
        }

        //Mark them on the map:
        new mapboxgl.Marker({
          draggable: false,
          color: colour,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      }
    });
}
updateMap();

let btn1 = document.getElementsByTagName("button")[0];
let btn2 = document.getElementsByTagName("button")[1];
let items = document.getElementsByClassName("indication");
btn1.addEventListener("click", () => {
  btn1.style.display = "none";
  items[0].style.display = "none";
});

btn2.addEventListener("click", () => {
  btn2.style.display = "none";
  items[1].style.display = "none";
});
