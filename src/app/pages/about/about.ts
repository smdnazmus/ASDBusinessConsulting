import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, FlexLayoutModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
