import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Produto } from 'app/model/produto.model';
import { ProdutoService } from 'app/service/produto/produto.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent extends GenericFormComponent<Produto, ProdutoService> {
  @ViewChild('produtoForm') produtoForm: NgForm;

  constructor(
    service: ProdutoService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Produto);
  }

  public initModal(produto?: Produto): void {
    if (produto) {
      Object.assign(this.obj, produto);
      this.edit = true;
    } else {
      this.obj = new Produto();
      this.edit = false;
    }
    $('#produtoModal').modal('show');
  }

  closeModal(): void {
    $('#produtoModal').modal('hide');
  }

  save() {
    this.toast('Produto Salvo', MessageType.SUCCESS);
    this.closeModal();
  }
}