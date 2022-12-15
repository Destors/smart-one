import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-ui-layout',
  templateUrl: './client-ui-layout.component.html',
  styleUrls: ['./client-ui-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientUiLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
