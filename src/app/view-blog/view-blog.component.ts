import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent {
  blogData: any;
  date!: string;
  constructor(private location: Location, private http: HttpClient, private router: Router) {
    const nav = this.location.getState() as { blog: any, date: string };
    this.blogData = nav.blog;
    this.date = nav.date
  }

  deleteBlog() {
    this.http.delete(`http://localhost:8080/delete?date=${this.date}`).subscribe(
      () => {
        this.blogData = null;  // Clear the blog data after deletion
        alert('Blog deleted successfully');
        this.router.navigate(["/"])
      },
      (error) => {
        console.error('Error deleting blog:', error);
      }
    );
  }
}