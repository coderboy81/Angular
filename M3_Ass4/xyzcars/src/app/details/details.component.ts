import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { CarproductService } from '../carproduct.service';
import { carproduct } from '../carproduct';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private ps: CarproductService) { }
  id: number= 0;
  private sub: any;
  detailProduct: carproduct;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => {
      this.id = +params['id'];
      console.log ("id is: " +this.id);

      this.detailProduct = this.ps.retrieveProductById(this.id);
    })
  }

}
