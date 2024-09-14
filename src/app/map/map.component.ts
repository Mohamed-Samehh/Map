import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private baseMaps: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.initMap();
    this.loadData();
  }

  private initMap(): void {
    const streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles © Esri'
    });

    this.map = L.map('map', {
      center: [13.453223, -16.681229],
      zoom: 13,
      layers: [streetMap]
    });

    this.baseMaps = {
      "Street Map": streetMap,
      "Satellite Map": satelliteMap
    };

    L.control.layers(this.baseMaps).addTo(this.map);
  }

  private loadData(): void {
    this.dataService.getData().subscribe(data => {
      this.addPointsToMap(data.points);
      this.addLegendToMap(data.legends);
    });
  }

  private addPointsToMap(points: any[]): void {
    points.forEach(point => {
      L.circleMarker([point.latitude, point.longitude], {
        color: point.color,
        radius: 5
      }).addTo(this.map)
        .bindPopup(`Value: ${point.value}`);
    });
  }

  private addLegendToMap(legends: any[]): void {
    const legend = new L.Control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      legends.forEach(legend => {
        div.innerHTML +=
          `<i style="background:${legend.color}"></i> ${legend.name}<br>`;
      });
      return div;
    };

    legend.addTo(this.map);
  }
}
