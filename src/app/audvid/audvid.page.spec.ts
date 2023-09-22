import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudvidPage } from './audvid.page';

describe('AudvidPage', () => {
  let component: AudvidPage;
  let fixture: ComponentFixture<AudvidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudvidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
