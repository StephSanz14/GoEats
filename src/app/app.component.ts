import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { AsideComponent } from "./aside/aside.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { MainbComponent } from './mainb/mainb.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, AsideComponent, FooterComponent, HeaderComponent, MainbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoEats';
}
