import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/model/category.model';
import { CategoryService } from 'app/service/category/category.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent extends GenericFormComponent<Category, CategoryService> {
  @ViewChild('categoryForm') categoryForm: NgForm;

  constructor(
    service: CategoryService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Category);
  }

  public initModal(category?: Category): void {
    if (category) {
      Object.assign(this.obj, category);
      this.edit = true;
    } else {
      this.obj = new Category();
      this.edit = false;
    }
    $('#categoryModal').modal('show');
  }

  closeModal(): void {
    $('#categoryModal').modal('hide');
  }

}
