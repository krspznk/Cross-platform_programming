import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FilePage } from './file.page';

describe('FilePage', () => {
  let component: FilePage;
  let fixture: ComponentFixture<FilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});