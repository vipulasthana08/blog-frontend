import { HttpClientModule } from '@angular/common/http'; // Import here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import the routing module
import { NewBlogComponent } from './new-blog/new-blog.component';

@NgModule({
  declarations: [AppComponent, NewBlogComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],  // Add here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}