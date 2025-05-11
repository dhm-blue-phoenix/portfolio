import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedATeamplayerComponent } from './need-a-teamplayer.component';

describe('NeedATeamplayerComponent', () => {
  let component: NeedATeamplayerComponent;
  let fixture: ComponentFixture<NeedATeamplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedATeamplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedATeamplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
