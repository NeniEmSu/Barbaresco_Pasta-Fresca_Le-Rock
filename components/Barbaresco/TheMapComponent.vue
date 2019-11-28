<i18n>
{
  "uk": {
    "location": "Barbaresco: м. Тернопіль, вулиця Князя Острозького, 14"

  },
  "en": {
   "location": "Barbaresco: C. Ternopil, 14 Ostrozkoho Street"

  },
  "ru": {
    "location": "Barbaresco г.. Тернополь, улица Князя Острожского, 14"
  }
}
</i18n>

<template>
  <div id="map">
    <GmapMap
      ref="map"
      :cluster="{options: {styles: clusterStyle}}"
      :center="{lat: locations[0].lat, lng: locations[0].lng}"
      :zoom="18"
      map-type-id="terrain"
      :options="{fullscreenControl: true, streetViewControl: true, mapTypeControl: true, zoomControl: true, gestureHandling: 'cooperative', styles: mapStyle}"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{lat: location.lat, lng: location.lng}"
        @click="currentLocation = location"
      >
        <GmapInfoWindow>
          <code>
            {{ location.name }}
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
          id: 1,
          lat: 49.549199,
          lng: 25.594941,
          name: this.$t('location')
        }
        // {
        //   lat: 49.551815,
        //   lng: 25.594149,
        //   name: 'Pasta Fresca: м. Тернопіль, бул. Т. Шевченка 23'
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

      },
      clusterStyle: [
        {
          url: 'https://googlemaps.github.io/js-marker-clusterer/images/m2.png',
          width: 56,
          height: 56,
          textColor: '#0A0A0A'
        }
      ],
      mapStyle: [
        {
          featureType: 'all',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              saturation: 36
            },
            {
              color: '#000000'
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#000000'
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#c4c4c4'
            }
          ]
        },
        {
          featureType: 'administrative.neighborhood',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#707070'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 21
            },
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.business',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffffff'
            },
            {
              lightness: '0'
            },
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              hue: '#ff000a'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#575757'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#2c2c2c'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#999999'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              saturation: '-52'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            },
            {
              lightness: 17
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
code {
  font-size: 18px;
  color: #0a0a0a;
  word-break: break-word;
}
</style>
