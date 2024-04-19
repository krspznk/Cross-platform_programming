import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GraphPage } from './graph.page';

describe('Tab3Page', () => {
  let component: GraphPage;
  let fixture: ComponentFixture<GraphPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});