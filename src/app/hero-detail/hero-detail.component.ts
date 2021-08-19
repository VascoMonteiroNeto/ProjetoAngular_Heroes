import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
