import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent  {

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "juego 2",
      "value": 15
    },
    {
      "name": "juego 3",
      "value": 13
    },
    {
      "name": "juego 4",
      "value": 7
    }
  ]


 



  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';

  colorScheme = {
    domain: ['#247ad1', '#612c99', '#2bab56', '#2aa1bf']
  };

  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }

}
