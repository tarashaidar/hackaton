const carsCoords = [
  {
    lat: 49.843115415548205,
    lng: 24.02199078482152
  },
  {
    lat: 49.84440230289024,
    lng: 24.025531300721177
  },
  {
    lat: 49.83989112801838,
    lng: 24.029286393342026
  },
  {
    lat: 49.84177314171475,
    lng: 24.024308213410386
  }
];

window.initMap = function () {
  getLocation(function (error, pos) {
      if (error) {
          return alert(error);
      }
      const uluru = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
      };
      const pointPosition = new google.maps.MarkerImage(
        "https://raw.githubusercontent.com/SergiySobchuk/www/master/uploads_images/place.png",
        new google.maps.Size(22, 22),
        new google.maps.Point(0, 0),
        new google.maps.Point(11, 11)
    );
      const image = 'https://raw.githubusercontent.com/SergiySobchuk/www/master/uploads_images/passanger_54_54.png';
      const map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: uluru});
      var marker = new google.maps.Marker({position: uluru, map: map, icon: image});
      
      carsCoords.forEach(coordinate => {
        const carImage = new google.maps.MarkerImage(
          "https://raw.githubusercontent.com/SergiySobchuk/www/master/uploads_images/taxi.png",
          new google.maps.Size(45, 45),
          new google.maps.Point(0, 0),
          new google.maps.Point(-22, 0)
        )
        const carPosition = new google.maps.Marker({position: coordinate, map: map, icon: carImage, draggable: true});
      });
      const newMarker = new google.maps.Marker({position: uluru, map: map, icon: pointPosition, draggable: false, navigationContol: true});

      window.google.maps.event.addListener(map, "dragend", function() {
        console.log(newMarker.getPosition().lat());
        console.log(newMarker.getPosition().lng());
      });
      window.google.maps.event.addListener(map , 'drag', function () {
        newMarker.setPosition( map.getCenter() );
    });
  });
}


function getLocation(callback) {
  if (navigator.geolocation) {
    const onError = function () {
      callback('failed');
    }
    const onSuccess = function (pos) {
        callback(null, pos);
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
  else {
    alert('geolocation is no available');
  }
}
