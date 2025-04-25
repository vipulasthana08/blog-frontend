import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.blogForm = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  submitForm() {
    console.log('Form Submitted:', this.blogForm.value);

    const formData = this.blogForm.value;

    const today = new Date();
    const formattedDate = today.toISOString();
    const body = {
      title: formData.title,
      desc: formData.description,
      date: formattedDate
    };

    const apiUrl = 'http://localhost:8080/new';  // Replace with your API URL

    this.http.post(apiUrl, body).subscribe({
      next: (response) => {
        console.log('API response:', response);
        this.router.navigate(["/"])

        // Optionally navigate or show success message
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
