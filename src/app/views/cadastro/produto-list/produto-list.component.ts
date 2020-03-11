import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'app/model/produto.model';
import { ProdutoService } from 'app/service/produto/produto.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent extends GenericListComponent<Produto, ProdutoService> {

  @ViewChild('produtoModal') produtoModal: ProdutoFormComponent;

  constructor(
    service: ProdutoService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(produto?: Produto): void {
    this.produtoModal.initModal(produto);
  }

}
