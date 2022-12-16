import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { AddProductFormField } from '../../common/product.interface';

@Component({
  selector: 'app-client-add-product-dialog',
  templateUrl: './client-add-product-dialog.component.html',
  styleUrls: ['./client-add-product-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAddProductDialogComponent implements OnInit {
  readonly fields = AddProductFormField;

  @Output() newItemEvent = new EventEmitter<string>();

  form!: FormGroup;
  submitted = false;
  displayModal: boolean = false;
  constructor(
    private apiService: AllProductsApiService,
    private messageService: MessageService
  ) {}

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

  public getFormValidator(formControlName: string) {
    return (
      this.form.get(`${formControlName}`)?.hasError('required') &&
      this.form.get(`${formControlName}`)?.touched
    );
  }

  showModalDialog() {
    this.displayModal = true;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid && !this.submitted) {
      this.submitted = true;
      this.apiService.addProduct(this.form.value).subscribe({
        error: (e) => console.error(e),
        complete: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmed',
            detail: `Product ${this.form.value.title} created successfully`,
          });
          this.newItemEvent.emit();
          this.displayModal = false;
          this.submitted = false;
          this.form.reset();
        },
      });
    } else
      this.messageService.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Please fill in all the fields.',
      });
  }
}
