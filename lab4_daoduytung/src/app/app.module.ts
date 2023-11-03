import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProductSuaComponent } from './product-sua/product-sua.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sanpham', component: ProductlistComponent},
  {path: 'sanpham/:id', component: ProductdetailComponent},
  {path: 'lienhe', component: LienheComponent},
  {path: 'dangnhap', component: DangnhapComponent},
  {path: 'admin/sp', component: ProductDsComponent},
  {path: 'admin/themSP', component: ProductThemComponent},
  {path: 'admin/suaSP/:id', component: ProductSuaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LienheComponent,
    ProductlistComponent,
    ProductdetailComponent,
    DangnhapComponent,
    NotfoundComponent,
    ProductDsComponent,
    ProductThemComponent,
    ProductSuaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
