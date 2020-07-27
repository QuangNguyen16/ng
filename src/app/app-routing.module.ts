
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app/app.component';
import { HomeComponent } from '../app/layout/home/home.component'
import {BoxCartComponent} from '../app/layout/box-cart/box-cart.component';
import {BoxContactComponent} from '../app/layout/box-contact/box-contact.component';
import { from } from 'rxjs';



const routes: Routes = [
    
        { path: 'home', component: HomeComponent  },
        { path: 'cart', component: BoxCartComponent },
        { path: 'Contact', component: BoxContactComponent }
    

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)  
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
