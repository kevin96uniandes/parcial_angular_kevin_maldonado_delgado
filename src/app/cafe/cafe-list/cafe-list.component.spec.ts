import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeListComponent } from './cafe-list.component';
import { By } from '@angular/platform-browser';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { CafeService } from '../cafe.service';
import { faker } from '@faker-js/faker';


describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CafeService ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table with records', () => {


    component.cafeList =
    [{ id: faker.datatype.number({min:1, max: 10}), nombre: faker.random.word(), altura: faker.datatype.number(), region: faker.random.word(),imagen:faker.image.avatar(), sabor:faker.random.word(), tipo:faker.random.word() },
      { id: faker.datatype.number({min:1, max: 10}), nombre: faker.random.word(), altura: faker.datatype.number(), region: faker.random.word(),imagen:faker.image.avatar(), sabor:faker.random.word(), tipo:faker.random.word() },
      { id: faker.datatype.number({min:1, max: 10}), nombre: faker.random.word(), altura: faker.datatype.number(), region: faker.random.word(),imagen:faker.image.avatar(), sabor:faker.random.word(), tipo:faker.random.word() }];



    fixture.detectChanges();
    const trElementsTable = fixture.debugElement.queryAll(By.css("tr"))
    const trCount = trElementsTable.slice(1).length
    expect(trCount).toBe(3);
  });
});
