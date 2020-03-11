import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'app/model/produto.model';
import { ProdutoService } from 'app/service/produto/produto.service';
import { MessageType, SwalType } from 'app/service/toast-notification-service/message-type.enum';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import swal from 'sweetalert2';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent extends GenericListComponent<Produto, ProdutoService> {

  @ViewChild('produtoModal') produtoModal: ProdutoFormComponent;

  produtos: Produto[] = [
    { id: '1', name: 'Macarrão', qtd: 789, dataVd: '11-11-2020', descricao: 'Macarrão', preco: 3.2, codBar: '753' },
    { id: '2', name: 'Arroz', qtd: 456, dataVd: '11-11-2020', descricao: 'Arroz', preco: 3, codBar: '357' },
    { id: '3', name: 'Açucar', qtd: 123, dataVd: '11-11-2020', descricao: 'Açucar', preco: 2.5, codBar: '951' },
    { id: '4', name: 'Trigo', qtd: 987, dataVd: '11-11-2020', descricao: 'Trigo', preco: 4, codBar: '159' },
    { id: '5', name: 'Leite', qtd: 654, dataVd: '11-11-2020', descricao: 'Leite', preco: 5, codBar: '761' }
  ]

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

  deleteItem() {
    swal(this.swalContent(SwalType.DELETE)
    ).then(function () {
      this.delete();
    }.bind(this)).catch(swal.noop);
  }

  delete() {
    this.toast(this.recordDeletedMsg, MessageType.SUCCESS);
  }

}
