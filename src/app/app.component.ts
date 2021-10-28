import {Component} from '@angular/core';
import {ILoadEventArgs, Legend, Maps, MapsTheme, MapsTooltip, Marker} from "@syncfusion/ej2-angular-maps";

Maps.Inject(Legend, Marker, MapsTooltip);
declare var require: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SyncfusionAngularMapTest';

  titleSettings: object = {
    text: 'Streckennetz Deutschland',
    textStyle: {
      size: '16px'
    }
  };
  public zoomSettings: object = {
    zoomFactor: 6,
    enable: true,
    maxZoom: 50
  };
  public legendSettings: object = {visible: true};
  public center = {
    latitude: 51.163361,
    longitude: 10.447683
  };

  public layers: object[] = [
    {
      layerType: "OSM",
      urlTemplate: 'https://a.tile.openstreetmap.org/level/tileX/tileY.png',
      attribution: "Open Street Map"
    },
    {
      layerType: "OSM",
      type: "SubLayer",
      urlTemplate: 'https://b.tiles.openrailwaymap.org/standard/level/tileX/tileY.png',
      attribution: "Open Railway Map",
      tileSize: 256
    },
    {
      layerType: "shape",
      type: "SubLayer",
      markerSettings: [{
        visible: true,
        border: {
          color: 'green',
          width: 2
        },
        fill: 'red',
        dashArray: '1',
        height: 20,
        width: 20,
        opacity: 0.9,
        animationDelay: 100,
        animationDuration: 1000,
        shape: 'Balloon',
        dataSource: [
          {latitude: 52.98772912, longitude: 10.5431745},
          {latitude: 53.01868417, longitude: 10.41821022},
          {latitude: 53.00364533, longitude: 10.26003991},
          {latitude: 52.99491167, longitude: 10.09725369},
          {latitude: 52.99043508, longitude: 9.93074104},
          {latitude: 52.98081419, longitude: 9.60714384},
          {latitude: 52.98157566, longitude: 9.56780541},
          {latitude: 52.48115944, longitude: 10.54412473},
          {latitude: 52.5106182, longitude: 10.5793833},
          {latitude: 52.550185, longitude: 10.60885271},
          {latitude: 52.60941856, longitude: 10.60829425},
          {latitude: 52.6298594, longitude: 10.63658319}
        ]
      }
      ]
    }
  ];
  // custom code start
  public load = (args: ILoadEventArgs) => {
    let theme: string = location.hash.split('/')[1];
    theme = theme ? theme : 'Material';
    if (args.maps != undefined) {
      args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() +
        theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    }
  }
}
