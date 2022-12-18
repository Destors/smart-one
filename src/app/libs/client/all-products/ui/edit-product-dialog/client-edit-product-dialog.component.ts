import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductsApiService } from '../../../api/products-api.service';
import { ProductFormField, Product } from '../../common/product.interface';

@Component({
  selector: 'app-client-edit-product-dialog',
  templateUrl: './client-edit-product-dialog.component.html',
  styleUrls: ['./client-edit-product-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientEditProductDialogComponent implements OnInit {
  readonly fields = ProductFormField;

  product: Product;
  form!: FormGroup;
  submitted = false;
  displayModal: boolean = false;
  constructor(
    private apiService: ProductsApiService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {
    this.product = config.data;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      [ProductFormField.Title]: new FormControl(null, [Validators.required]),
      [ProductFormField.Price]: new FormControl(null, [Validators.required]),
      [ProductFormField.Brand]: new FormControl(null, [Validators.required]),
      [ProductFormField.Category]: new FormControl(null, [Validators.required]),
      [ProductFormField.Description]: new FormControl(null, [
        Validators.required,
      ]),
    });

    this.form.setValue({
      [ProductFormField.Title]: this.product.title,
      [ProductFormField.Price]: this.product.price,
      [ProductFormField.Brand]: this.product.brand,
      [ProductFormField.Category]: this.product.category,
      [ProductFormField.Description]: this.product.description,
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  // TODO Send only modified fields.
  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.apiService
        .patchProduct(this.product.id!, this.form.value)
        .subscribe({
          error: (e) => console.error(e),
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Confirmed',
              detail: 'Product data changed',
            });
            this.ref.close();
          },
        });
    } else return;
  }
}
