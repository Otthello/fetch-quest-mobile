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
