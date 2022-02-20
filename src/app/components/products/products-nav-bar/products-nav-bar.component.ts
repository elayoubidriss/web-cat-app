import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../State/product.state";
import {EventDriverService} from "../../../State/event.driver.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

 // @Output() producteventEmitter :EventEmitter<ActionEvent> =new EventEmitter();

  constructor(private eventDrivenService:EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.producteventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }


  onGetSelectedProducts() {
    //this.producteventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }



  onGetAvailableProducts() {
    //this.producteventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }


  onNewProduct() {
    //this.producteventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.NEW_PRODUCTS});
  }


  onSearch(dataForm: any) {
   // this.producteventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
  }
}
