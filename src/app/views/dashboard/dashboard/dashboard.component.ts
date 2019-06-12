import { Component, AfterViewInit } from '@angular/core';
import { ArduinoService } from 'app/service/arduino/arduino.service';
import { Arduino } from 'app/model/arduino.model';
import { Plantacao } from 'app/model/plantacao.model';
import { PlantacaoService } from 'app/service/plantacao/plantacao.service';
import { Plant } from 'app/model/plant.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  plantacoes: Plantacao[] = [];

  constructor(
    private plantacaoService: PlantacaoService,
    private arduinoService: ArduinoService
  ) { }


  ngAfterViewInit() {
    this.getEquipes();
  }

  getEquipes() {
    this.plantacaoService.getAll().subscribe(
      success => {
        this.plantacoes = success;
      }
    );
  }

  getQntPlantas(plantas: Plant[]) {
    let total = 0;
    plantas.forEach(planta => {
      total += 1;
    });
    return total;
  }

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
