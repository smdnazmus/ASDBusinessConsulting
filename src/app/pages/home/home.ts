import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, FlexLayoutModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
