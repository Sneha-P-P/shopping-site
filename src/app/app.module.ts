import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-list/product-filter';
import { StarComponent } from './star/star.component';
import { ProductService } from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path:'welcome', component: WelcomeComponent }
    ])
  ],
  providers: [ProductService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
