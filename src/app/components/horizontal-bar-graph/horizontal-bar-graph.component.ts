import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent implements OnDestroy {

  @Input() results: any[] = [];


 



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

  interval;
  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    /* clearInterval(this.interval) */
  }

}
