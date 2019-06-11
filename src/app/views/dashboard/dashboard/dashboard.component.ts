import { Component } from '@angular/core';
import { ArduinoService } from 'app/service/arduino/arduino.service';
import { Arduino } from 'app/model/arduino.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private arduinoService: ArduinoService
  ) { }

  ligaDesliga() {
    const arduino: Arduino = new Arduino();
    arduino.ip = 'http://192.168.43.83/led1on';
    arduino.ativar = true;
    this.arduinoService.bombOn(arduino).subscribe(
      success => {
        console.log('foi');
      }
    );
  }

}
