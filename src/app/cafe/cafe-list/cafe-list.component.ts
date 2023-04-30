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
  bendOrigin: number = 0;
  bendBlend: number = 0;

  constructor(private cafeService:  CafeService) {}

  ngOnInit(): void {
    this.getCafeList();
  }

  getCafeList(){
    this.cafeService.getCafeList().subscribe({
      next: (cafeList: Cafe[]) => {
        this.cafeList = cafeList
        this.bendBlend = this.cafeList.filter(cafe => cafe.tipo === 'Blend').length;
        this.bendOrigin = this.cafeList.filter(cafe => cafe.tipo === "Café de Origen").length
      }
    })
  }
}
