import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogAlreadyExistComponent } from './blog-already-exist/blog-already-exist.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'new-blog', component: NewBlogComponent},
    {path: 'blog-exists', component: BlogAlreadyExistComponent},
    { path: 'view-blog', component: ViewBlogComponent }
];
