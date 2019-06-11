import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Plantacao } from 'app/model/plantacao.model';
import { PlantacaoService } from 'app/service/plantacao/plantacao.service';
import { NavItemType } from 'app/md/md.module';
import { Plant } from 'app/model/plant.model';
import { PlantService } from 'app/service/plant/plant.service';
import { ToastService } from 'app/service/toast-notification-service/toast-service/toast.service';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';

declare var $: any;

@Component({
  selector: 'app-plantacao-form',
  templateUrl: './plantacao-form.component.html',
  styleUrls: ['./plantacao-form.component.scss']
})
export class PlantacaoFormComponent extends GenericFormComponent<Plantacao, PlantacaoService> {
  @ViewChild('plantacaoForm') plantacaoForm: NgForm;

  plantasAdicionadas: Plant[] = [];
  plantas: Plant[] = [];
  slcPlantas: string[] = [];
  selectedPlanta: string;
  selectPlanta: Plant = null;

  constructor(
    private plantService: PlantService,
    service: PlantacaoService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Plantacao);
  }

  public initModal(plantacao?: Plantacao): void {
    this.clearForm(this.plantacaoForm);
    this.plantasAdicionadas = [];
    if (plantacao) {
      Object.assign(this.obj, plantacao);
      this.plantasAdicionadas = this.obj.plants;
      this.edit = true;
    } else {
      this.obj = new Plantacao();
      this.edit = false;
    }
    this.getPlants();
    $('#plantacaoModal').modal('show');
  }

  getPlants(): void {
    this.plantService.getAll().subscribe(
      success => {
        this.plantas = success;
        this.changeToStrings();
      }
    );
  }

  changeToStrings(): void {
    this.slcPlantas = [];
    this.plantas.forEach(
      planta => {
        this.slcPlantas.push(planta.name);
      }
    );
  }

  setPlant(): void {
    const found = this.plantas.find((planta) => planta.name === this.selectedPlanta);
    if (found) {
      this.selectPlanta = found;
    } else {
      this.selectPlanta = null;
    }
  }

  addPlant() {
    if (this.selectPlanta) {
      const found = this.plantasAdicionadas.find((planta) => planta.id === this.selectPlanta.id);
      if (found) {
        this.selectedPlanta = '';
        ToastService.show('Planta já adicionada a plantação', MessageType.WARNING);
      } else {
        this.selectedPlanta = '';
        this.plantasAdicionadas.push(this.selectPlanta);
      }
    }
    this.selectedPlanta = '';
  }

  getHolderPlant(): string {
    if (this.plantas.length < 1) {
      return 'Não há plantas cadastradas';
    } else {
      return 'Pesquise por plantas';
    }
  }

  removePlant(index: number): void {
    if (this.plantasAdicionadas[index].id) {
      this.plantasAdicionadas.splice(index, 1);
    }
  }

  beforeSave() {
    this.obj.plants = this.plantasAdicionadas;
  }

  closeModal(): void {
    $('#plantacaoModal').modal('hide');
  }

}
