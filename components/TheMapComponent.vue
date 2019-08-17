<i18n>
{
  "uk": {
    "location": "Barbaresco: м. Тернопіль, вулиця Князя Острозького, 14"
    
  },
  "en": {
   "location": "Barbaresco: C. Ternopil, 14 Ostrozhsky Street"

  },
  "ru": {
    "location": "Barbaresco г.. Тернополь, улица Князя Острожского, 14"
  }
}
</i18n>

<template>
  <div>
    <style>
    .vue-map-container {
      max-height: 300px;
      height: 100%;
      width: 100vw !important;
    }
    </style>
    <GmapMap
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :zoom="18"
      map-type-id="terrain"
      :options="{fullscreenControl: true, streetViewControl: true, mapTypeControl: true, zoomControl: true, gestureHandling: 'cooperative', styles: mapStyle}"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
        @click="currentLocation = location"
      >
        <GmapInfoWindow>
          <code>
            {{location.name}}
          </code>
        </GmapInfoWindow>
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 49.549199,
          lng: 25.594941,
          name: this.$t('location')
        },
        // {
        //   lat: 49.551815,
        //   lng: 25.594149,
        //   name: 'Pasta Presca: м. Тернопіль, бул. Т. Шевченка 23'
        // },
        // {
        //   lat: 49.552314,
        //   lng: 25.596150,
        //   name: 'Le Rock: м. Тернопіль, вулиця Олени Кульчицької, 2'
        // },
        // {
        //   lat: 49.2315,
        //   lng: 25.96151,
        //   name: 'Piazza: м. Тернопіль, вулиця Князя Острозького, 14'
        // }

      ],
      pins: {
        // selected:
        //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAApVBMVEUAAAD/AAD/AADxHCvyGyjzGDHoFy7vGSnwHi3wHSzsGi3uGivuHivrGyvsHCztGyrtHSzuHCvuHSzsHSzsHSvtHCvtHCrtGyvsHCvsHCvtHSztHCvtHCvtHCvuGyvtHCvtHSztGyvtHSvtHCvtHCztHCvsHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCvtHCv///8Zo6fZAAAANXRSTlMAAQISExUWHyIjKDs8QVJVV1ppe3x+f4KHiJiZmpuxt7vDxMbHys7R4Ont7u/w8fLz9Pb7/qzXrqoAAAABYktHRDZHv4jRAAAAn0lEQVQYGaXBV5KCQABF0eeooxjGnDFnpc13/1uzi7JoQL/Gc/R/v931fr/u5JXSuBK61JVQe/Dy+FNM/kQkyMnpYRnfN1hdOVsgKEqeATZyzsBI1hg4yTkCQ1kj4CBnBQRFyTPAUs4Ay/i+werLKRFTUsyCyFxxFSJlJcx4mSnJuxG6FpTSJtRS2s8Ua5LRm+wOdll9UL3fq/qo2dQ3nvcVIgrnmsRBAAAAAElFTkSuQmCC",
        // notSelected:
        //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII="
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
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#c4c4c4"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#707070"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 21
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "lightness": "0"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "hue": "#ff000a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#575757"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#999999"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "saturation": "-52"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
code {
  font-size: 18px;
  color: #0a0a0a;
  word-break: break-word;
}
</style>
