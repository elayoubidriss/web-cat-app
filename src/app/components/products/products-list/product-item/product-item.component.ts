import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../State/product.state";
import {EventDriverService} from "../../../../State/event.driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


   @Input() product?:Product;
  //@Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor(private eventDriivenService:EventDriverService) {}

  ngOnInit(): void {
  }

  onSelect(product: Product) {
  //this.eventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:product});
    this.eventDriivenService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:product});
  }

  onEdit(product: Product) {
    //this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:product});
    this.eventDriivenService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:product});
  }

  onDelete(product: Product) {
    //this.eventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:product});
    this.eventDriivenService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:product});
  }
}
