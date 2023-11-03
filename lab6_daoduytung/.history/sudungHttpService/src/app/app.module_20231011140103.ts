import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
import { SanphamListComponent } from './sanpham-list/sanpham-list.component';
import { SanphamThemComponent } from './sanpham-them/sanpham-them.component';
import { SanphamSuaComponent } from './sanpham-sua/sanpham-sua.component';


@NgModule({
  declarations: [AppComponent, LoaiSanphamComponent, SanphamListComponent, SanphamThemComponent, SanphamSuaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
