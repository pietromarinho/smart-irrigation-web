import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/model/category.model';
import { CategoryService } from 'app/service/category/category.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends GenericListComponent<Category, CategoryService> {

  @ViewChild('categoryModal') categoryModal: CategoryFormComponent;

  constructor(
    service: CategoryService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(category?: Category): void {
    this.categoryModal.initModal(category);
  }

}
