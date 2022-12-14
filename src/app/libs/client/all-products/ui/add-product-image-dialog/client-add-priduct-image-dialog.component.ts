import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductsApiService } from '../../../api/products-api.service';
import { Product } from '../../common/product.interface';

@Component({
  selector: 'add-priduct-image',
  templateUrl: './client-add-priduct-image-dialog.component.html',
  styleUrls: ['./client-add-priduct-image-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAddPriductImageDialogComponent implements OnInit {
  addImgDialogDisplay: boolean = false;
  file: File | undefined;
  @Input() product!: Product;

  constructor(
    private messageService: MessageService,
    private apiService: ProductsApiService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  showDialog() {
    return this.addImgDialogDisplay
      ? (this.addImgDialogDisplay = false)
      : (this.addImgDialogDisplay = true);
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    this.apiService.addProductImage(this.product.id!, this.file).subscribe({
      error: (err) => console.error(err),
      complete: () => {
        this.showDialog();
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Product img uploaded',
        });
        this.changeDetectionRef.markForCheck();
      },
    });
  }
}
