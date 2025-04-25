import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-already-exist',
  imports: [],
  templateUrl: './blog-already-exist.component.html',
  styleUrl: './blog-already-exist.component.css'
})
export class BlogAlreadyExistComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']); // navigate to home after 10 seconds
    }, 10000); // 10000ms = 10 seconds
  }
}
