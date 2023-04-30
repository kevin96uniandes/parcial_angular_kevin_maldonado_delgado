import { Component } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent {
  cafeList: Array<Cafe> = [];

  constructor(private cafeService:  CafeService) {}

  ngOnInit(): void {
    this.getCafeList();
  }

  getCafeList(){
    this.cafeService.getCafeList().subscribe({
      next: (cafeList: Cafe[]) => {
        this.cafeList = cafeList
        console.log(this.cafeList);
      }
    })
  }
}
