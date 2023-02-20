import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netclix';
  navBg: any;

  @HostListener('document:scroll') scrollover() {

    console.log(document.body.scrollTop, 'scrollLength');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBg = {
        backgroundColor: '#000000'
  }
} else {
  this.navBg = {
  }
}
  }
}