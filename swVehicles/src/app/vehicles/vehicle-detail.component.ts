import { Component, computed, inject } from '@angular/core';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'sw-vehicle-detail',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './vehicle-detail.component.html',
})
export class VehicleDetailComponent {
  vehicleService = inject(VehicleService);
  cartService = inject(CartService);

  vehicle = this.vehicleService.selectedVehicle;
  errorMessage = this.vehicleService.errorMessage;

  // This should work!
  // Gives "object could be null" error even though the value is checked
  // pageTitle = computed(() =>
  //   this.vehicle() ? `Detail for: ${this.vehicle().name}` : null
  // );

  // This works
  pageTitle = computed(() => {
    let v = this.vehicle();
    return v ? `Detail for: ${v.name}` : null
  });

  addToCart(vehicle: Vehicle) {
    this.cartService.addToCart(vehicle);
  }
}
