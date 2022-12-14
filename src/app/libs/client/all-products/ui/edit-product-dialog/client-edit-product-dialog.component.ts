import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { AddProductFormField } from '../../common/product.interface';

@Component({
  selector: 'app-client-edit-product-dialog',
  templateUrl: './client-edit-product-dialog.component.html',
  styleUrls: ['./client-edit-product-dialog.component.scss'],
})
export class ClientEditProductDialogComponent implements OnInit {
  readonly fields = AddProductFormField;

  form!: FormGroup;
  submitted = false;
  displayModal: boolean = false;
  constructor(private apiService: AllProductsApiService) {}

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
  }

  showModalDialog() {
    this.displayModal = true;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    console.log(this.form.value);
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.apiService.addProduct(this.form.value);
    } else return;
  }
}
