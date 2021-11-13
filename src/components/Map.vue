<template>
  <div id="map">
    <!-- Comment
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
    -->
    <GmapMap
      class="GmapMap"
      :center="coordinates"
      :zoom="15"
      map-type-id="roadmap"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
      }"
    >
      <GmapMarker :position="coordinates" />
      <GmapCircle
        :center="coordinates"
        :radius="1000"
        :options="{ fillColor: 'grey', fillOpacity: 0.4, strokeWeight: 0 }"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coordinates: {
        lat: 0,
        long: 0,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
};
</script>

<style>
.GmapMap {
  width: 100%;
  height: 89vh;
  margin: 0px;
  padding: 0px;
  position: relative;
  overflow: hidden;
}
</style>
