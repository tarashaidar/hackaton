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

      const newMarker = new google.maps.Marker({position: uluru, map: map, icon: pointPosition, draggable: false, navigationContol: true});

      google.maps.event.addListener(map, "dragend", function() {
        console.log(newMarker.getPosition().lat());
        console.log(newMarker.getPosition().lng());
      });
      window.google.maps.event.addListener(map , 'drag', function (event) {
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
