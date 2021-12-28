import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

let isMenuOpen=false;

const menuButton= document.querySelector('.menu-btn');

menuButton?.addEventListener('click',() =>{
  isMenuOpen = !isMenuOpen;

  if(isMenuOpen){
    menuButton.classList.add('open');
  }else{
    menuButton.classList.remove('open');
  }
});
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
