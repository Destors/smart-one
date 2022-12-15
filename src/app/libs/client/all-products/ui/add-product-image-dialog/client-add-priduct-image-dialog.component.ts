import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from '../../common/product.interface';

@Component({
  selector: 'add-priduct-image',
  templateUrl: './client-add-priduct-image-dialog.component.html',
  styleUrls: ['./client-add-priduct-image-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAddPriductImageDialogComponent implements OnInit {
  display: boolean = false;
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}

  showDialog() {
    this.display = true;
  }
}
