import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesranksComponent } from './filesranks.component';

describe('FilesranksComponent', () => {
  let component: FilesranksComponent;
  let fixture: ComponentFixture<FilesranksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesranksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesranksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
