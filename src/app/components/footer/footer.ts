import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, FlexLayoutModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
