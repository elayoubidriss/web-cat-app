import { Component, OnInit } from '@angular/core';
import {EventDriverService} from "../../State/event.driver.service";
import {ActionEvent} from "../../State/product.state";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  counter:number=0;
  constructor(private eventDrivenService:EventDriverService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      ++this.counter;
    });


  }

}
