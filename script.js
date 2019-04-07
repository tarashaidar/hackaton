window.initMap = function () {
    // The location of Uluru
    getLocation(function (error, pos) {
        if (error) {
            return alert(error);
        }

        const uluru = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        };

        // The map, centered at Uluru
        const image = 'https://raw.githubusercontent.com/SergiySobchuk/www/master/uploads_images/passanger_54_54.png';
        

        const map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map, icon: image});
    });
  }

  function getLocation(callback) {
    if (navigator.geolocation) {
      const onError = function () {
        callback('failed');
      }

      const onSuccess = function (pos) {
          // showPosition
          callback(null, pos);
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
      alert('geolocation is no available');
    }
  }
//павпав
//   initMap();
