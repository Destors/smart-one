import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { AddProductFormField, Product } from '../../common/product.interface';

@Component({
  selector: 'app-client-edit-product-dialog',
  templateUrl: './client-edit-product-dialog.component.html',
  styleUrls: ['./client-edit-product-dialog.component.scss'],
})
export class ClientEditProductDialogComponent implements OnInit {
  readonly fields = AddProductFormField;

  product: Product;
  form!: FormGroup;
  submitted = false;
  displayModal: boolean = false;
  constructor(
    private apiService: AllProductsApiService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.product = config.data;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      [AddProductFormField.Title]: new FormControl(null, [Validators.required]),
      [AddProductFormField.Price]: new FormControl(null, [Validators.required]),
      [AddProductFormField.Brand]: new FormControl(null, [Validators.required]),
      [AddProductFormField.Category]: new FormControl(null, [
        Validators.required,
      ]),
      [AddProductFormField.Description]: new FormControl(null, [
        Validators.required,
      ]),
    });

    this.form.setValue({
      [AddProductFormField.Title]: this.product.title,
      [AddProductFormField.Price]: this.product.price,
      [AddProductFormField.Brand]: this.product.brand,
      [AddProductFormField.Category]: this.product.category,
      [AddProductFormField.Description]: this.product.description,
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    console.log(this.form.value);
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.apiService.patchProduct(this.product.id!, this.form.value);
    } else return;
  }
}
