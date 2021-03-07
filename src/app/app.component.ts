import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nortwind';
  product: any = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  };
}
