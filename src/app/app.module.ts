import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './layout/shop/shop.component';
import { BoxHeaderComponent } from './layout/box-header/box-header.component';
import { BoxFooterComponent } from './layout/box-footer/box-footer.component';
import { CategoryProductComponent } from './layout/content2/category-product/category-product.component';
import { BoxBrandsProductsComponent } from './layout/content2/box-brands-products/box-brands-products.component';
import { BoxPriceComponent } from './layout/content2/box-price/box-price.component';
import { BoxFeaturesItemsComponent } from './layout/content2/box-features-items/box-features-items.component';
import { BoxCategoryTabComponent } from './layout/content2/box-category-tab/box-category-tab.component';
import { BoxRecomenItemsComponent } from './layout/content2/box-recomen-items/box-recomen-items.component';
import { LayoutComponent } from './layout/layout.component';
import { Content1Component } from './layout/content1/content1.component';
import { Content2Component } from './layout/content2/content2.component';
import { BoxCartComponent } from './layout/box-cart/box-cart.component';
import { Route } from '@angular/compiler/src/core';
import { BoxContactComponent } from './layout/box-contact/box-contact.component';
import { HomeComponent } from '../app/layout/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    
    ShopComponent,
    BoxHeaderComponent,
    BoxFooterComponent,
    CategoryProductComponent,
    BoxBrandsProductsComponent,
    BoxPriceComponent,
  
    BoxFeaturesItemsComponent,
    BoxCategoryTabComponent,
    BoxRecomenItemsComponent,
    
    LayoutComponent,
    Content1Component,
    Content2Component,
    BoxCartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
