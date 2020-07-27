import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BoxCartComponent } from '../box-cart/box-cart.component';
import {} from '../box-contact/box-contact.component';

@Component({
  selector: 'app-box-header',
  templateUrl: './box-header.component.html',
  styleUrls: ['./box-header.component.css']
})
export class BoxHeaderComponent implements OnInit {
  public menu: any;
  public inf =['+2 95 01 88 821', 'info@domain.com'];
  public width: number = 0;
  constructor(
    public router: Router,
  ) {
      this.menu = [
        { id: 1, name: "Home", link: "",  },
        { id: 2, name: "Shop", link: "shop",  },
        { id: 3, name: "Cart", link: BoxCartComponent, },
        { id: 4, name: "Contact", link: BoxCartComponent,  },
       
      ];
   }

  ngOnInit(): void {
  }

}
