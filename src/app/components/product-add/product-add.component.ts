import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {EventDriverService} from "../../State/event.driver.service";
import {ProductActionsTypes} from "../../State/product.state";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup!: FormGroup;
  submited:boolean=false;


  constructor(private fb:FormBuilder, private productsService:ProductService,
              private eventDrivenService:EventDriverService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    });
  }

  onSaveProduct() {
    this.submited=true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.save(this.productFormGroup?.value)
      .subscribe(data=>{
        this.eventDrivenService.publishEvent({type:ProductActionsTypes.PRODUCT_ADDED})
        alert("Success Saving product");
      });
  }
}
