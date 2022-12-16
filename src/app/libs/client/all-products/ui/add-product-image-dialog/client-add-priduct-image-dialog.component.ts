import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { AllProductsApiService } from '../../api/all-products-api.service';
import { Product } from '../../common/product.interface';

@Component({
  selector: 'add-priduct-image',
  templateUrl: './client-add-priduct-image-dialog.component.html',
  styleUrls: ['./client-add-priduct-image-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAddPriductImageDialogComponent implements OnInit {
  display: boolean = false;
  file: File | undefined;
  @Input() product!: Product;

  constructor(
    private messageService: MessageService,
    private apiService: AllProductsApiService
  ) {}

  ngOnInit(): void {}

  showDialog() {
    this.display = true;
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    this.apiService.addProductImage(this.product.id!, this.file).subscribe({
      error: (err) => console.error(err),
      complete: () => console.log('Uplodar success'),
    });
  }
}
