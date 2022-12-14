import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-add-product-dialog',
  templateUrl: './client-add-product-dialog.component.html',
  styleUrls: ['./client-add-product-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAddProductDialogComponent implements OnInit {
  displayModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showModalDialog() {
    this.displayModal = true;
  }
}
