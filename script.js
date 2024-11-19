    // Create a map with OpenStreetMap as the base layer
    const map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM() // OpenStreetMap layer
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([0, 0]), // Initial center: Longitude, Latitude
          zoom: 2 // Initial zoom level
        })
      });
  
      // Create a vector source to hold real-time features
      const vectorSource = new ol.source.Vector();
  
      // Create a vector layer and add it to the map
      const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({ color: 'red' }),
            stroke: new ol.style.Stroke({ color: 'white', width: 2 })
          })
        })
      });
      map.addLayer(vectorLayer);
  
      // Function to add a feature (point) to the map
      function addFeature(lon, lat) {
        const feature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
        });
        vectorSource.addFeature(feature);
      }
  
      // Simulate real-time data by adding random points every 2 seconds
      setInterval(() => {
        const lon = -180 + Math.random() * 360; // Random longitude
        const lat = -90 + Math.random() * 180;  // Random latitude
        addFeature(lon, lat); // Add the new point
      }, 2000); // Add a point every 2 seconds