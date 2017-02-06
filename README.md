
  showInfoWindow(marker) {
    marker.ng2MapComponent.openInfoWindow(
      'iw',    // id of InfoWindow
      marker,  // anchor for InfoWindow
      {        // local variables for InfoWindow
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      }
    );
  }

KEY WHICH YOU MUST NOT LOSE!!!!!!

424864f710be68095339e465c0c5beb2

