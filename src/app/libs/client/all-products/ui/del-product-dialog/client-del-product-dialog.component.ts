import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-client-del-product-dialog',
  templateUrl: './client-del-product-dialog.component.html',
  styleUrls: ['./client-del-product-dialog.component.scss'],
})
export class ClientDelProductDialogComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
}
