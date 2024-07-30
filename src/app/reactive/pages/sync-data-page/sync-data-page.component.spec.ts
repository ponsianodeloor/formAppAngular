import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncDataPageComponent } from './sync-data-page.component';

describe('SyncDataPageComponent', () => {
  let component: SyncDataPageComponent;
  let fixture: ComponentFixture<SyncDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyncDataPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
