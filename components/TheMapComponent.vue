<template>
  <div>
    <style>
    .GMap__Wrapper {
      width: 100%;
      height: 300px;
    }
    </style>
    <GMap
      id="map"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative', styles: mapStyle}"
      :zoom="6"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = location"
      >
        <GMapInfoWindow>
          <code>
            lat: {{ location.lat }},
            lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 49.542985599999994,
          lng: 25.594152599999997
        },
        {
          lat: 49.55589,
          lng: 25.60556
        },
        {
          lat: 49.552310,
          lng: 25.595250
        }

      ],
      pins: {
        notSelected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAApVBMVEUAAAD/AAD/AADxHCvyGyjzGDHoFy7vGSnwHi3wHSzsGi3uGivuHivrGyvsHCztGyrtHSzuHCvuHSzsHSzsHSvtHCvtHCrtGyvsHCvsHCvtHSztHCvtHCvtHCvuGyvtHCvtHSztGyvtHSvtHCvtHCztHCvsHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCv///8Zo6fZAAAANXRSTlMAAQISExUWHyIjKDs8QVJVV1ppe3x+f4KHiJiZmpuxt7vDxMbHys7R4Ont7u/w8fLz9Pb7/qzXrqoAAAABYktHRDZHv4jRAAAAn0lEQVQYGaXBV5KCQABF0eeooxjGnDFnpc13/1uzi7JoQL/Gc/R/v931fr/u5JXSuBK61JVQe/Dy+FNM/kQkyMnpYRnfN1hdOVsgKEqeATZyzsBI1hg4yTkCQ1kj4CBnBQRFyTPAUs4Ay/i+werLKRFTUsyCyFxxFSJlJcx4mSnJuxG6FpTSJtRS2s8Ua5LRm+wOdll9UL3fq/qo2dQ3nvcVIgrnmsRBAAAAAElFTkSuQmCC",
        selected:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
      },
      clusterStyle: [
        {
          url: "https://googlemaps.github.io/js-marker-clusterer/images/m2.png",
          width: 56,
          height: 56,
          textColor: "#0A0A0A"
        }
      ],
      mapStyle: [
        // {
        //   featureType: "all",
        //   elementType: "labels.text.fill",
        //   stylers: [
        //     {
        //       color: "#ffffff"
        //     }
        //   ]
        // },
        // {
        //   featureType: "all",
        //   elementType: "labels.text.stroke",
        //   stylers: [
        //     {
        //       visibility: "on"
        //     },
        //     {
        //       color: "#3e606f"
        //     },
        //     {
        //       weight: 2
        //     },
        //     {
        //       gamma: 0.84
        //     }
        //   ]
        // },
        // {
        //   featureType: "all",
        //   elementType: "labels.icon",
        //   stylers: [
        //     {
        //       visibility: "off"
        //     }
        //   ]
        // },
        // {
        //   featureType: "administrative",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       weight: 0.6
        //     },
        //     {
        //       color: "#313536"
        //     }
        //   ]
        // },
        // {
        //   featureType: "landscape",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       color: "#44a688"
        //     }
        //   ]
        // },
        // {
        //   featureType: "poi",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       color: "#13876c"
        //     }
        //   ]
        // },
        // {
        //   featureType: "poi.attraction",
        //   elementType: "geometry.stroke",
        //   stylers: [
        //     {
        //       color: "#f5e4e4"
        //     },
        //     {
        //       visibility: "off"
        //     }
        //   ]
        // },
        // {
        //   featureType: "poi.attraction",
        //   elementType: "labels",
        //   stylers: [
        //     {
        //       visibility: "on"
        //     },
        //     {
        //       lightness: "14"
        //     }
        //   ]
        // },
        // {
        //   featureType: "poi.park",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       color: "#13876c"
        //     },
        //     {
        //       visibility: "simplified"
        //     }
        //   ]
        // },
        // {
        //   featureType: "road",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       color: "#067372"
        //     },
        //     {
        //       lightness: "-20"
        //     }
        //   ]
        // },
        // {
        //   featureType: "transit",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       color: "#357374"
        //     }
        //   ]
        // },
        // {
        //   featureType: "water",
        //   elementType: "geometry",
        //   stylers: [
        //     {
        //       color: "#004757"
        //     }
        //   ]
        // }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#map {
  max-height: 300px;
  height: 100%;
  width: 100%;

  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.35);
  transition: ease-in-out 300ms;
  -webkit-transition: ease-in-out 300ms;
  -moz-transition: ease-in-out 300ms;
  -ms-transition: ease-in-out 300ms;
  -o-transition: ease-in-out 300ms;
}

#map:hover {
  transform: scale(1.005);
  -webkit-transform: scale(1.005);
  -moz-transform: scale(1.005);
  -ms-transform: scale(1.005);
  -o-transform: scale(1.005);
}

.GMap,
p {
  margin-top: 30px;
}

.GMap__Wrapper {
  width: 100%;
  height: 300px;
}
</style>
