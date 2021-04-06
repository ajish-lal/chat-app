import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrls: ['./traffic-lights.component.scss']
})
export class TrafficLightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.trafficLights(1, 4);
  }

  trafficLights(signalTime, noOfLights) {
    let lightIndex = 1;
    setInterval(() => {
      if (lightIndex <= noOfLights) {
        let lightElem = document.getElementById('light' + (lightIndex - 1));
        if (lightElem)
          lightElem.classList.remove('green');

        lightElem = document.getElementById('light' + lightIndex);
        lightElem.classList.add('green');
        lightIndex++;
      } else {
        let lightElem = document.getElementById('light' + (lightIndex - 1));
        if (lightElem)
          lightElem.classList.remove('green');
        lightIndex = 1;
      }
    }, signalTime * 1000);
  }

}
