import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ClientAllProductsTableComponent } from '../ui/table/client-all-products-table.component';

@Component({
  selector: 'app-client-all-products-page',
  templateUrl: './client-all-products-page.component.html',
  styleUrls: ['./client-all-products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAllProductsPageComponent implements OnInit {
  @ViewChild(ClientAllProductsTableComponent)
  childTable: ClientAllProductsTableComponent | undefined;

  constructor(public readonly changeDetectorRef: ChangeDetectorRef) {}

  updateChild() {
    this.childTable!.updateTable();
    this.changeDetectorRef.detectChanges();
  }
  ngOnInit(): void {}
}
