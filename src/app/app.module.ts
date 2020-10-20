import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MyServiceService} from './my-service.service'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { SearchPipePipe } from './search-pipe.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    DetailComponent,
    SearchPipePipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
