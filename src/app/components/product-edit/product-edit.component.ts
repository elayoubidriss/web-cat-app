import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventDriverService} from "../../State/event.driver.service";
import {ProductActionsTypes} from "../../State/product.state";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId:number;
  productFormGroup?:FormGroup;
   submited:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private productsService:ProductService,
              private fb:FormBuilder, private eventDrivenService:EventDriverService) {
    this.productId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId)
      .subscribe(product=>{
        this.productFormGroup=this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required],
        })
      });
  }

  onUpdateProduct() {
    this.productsService.updateProducts(this.productFormGroup?.value)
      .subscribe(data=>{
        this.eventDrivenService.publishEvent({type:ProductActionsTypes.PRODUCT_UPDATED})
        alert("Sucess Product update");
      });
  }
}
