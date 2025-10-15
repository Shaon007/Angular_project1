import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { ClubComponent } from './pages/home/club/club.component';
import { ProgramComponent } from './pages/home/program/program.component';
import { NewProductComponent } from './pages/home/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    BannerComponent,
    SliderComponent,
    ClubComponent,
    ProgramComponent,
    NewProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
