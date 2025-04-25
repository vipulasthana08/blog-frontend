import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Ensure this is marked as true
  imports: [HttpClientModule, FormsModule, CommonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogging karo';
  selectedDate: Date | null = null;
  showCalendar = false;
  showDatepicker: boolean = false;    // Controls visibility of the date picker

  constructor(private http: HttpClient, private router: Router) { }

  navigateToNewBlog() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const apiUrl = 'http://localhost:8080/check?date=' + formattedDate;  // Replace with your API URL

    this.http.get(apiUrl, { observe: 'response' }).subscribe(
      response => {
        // Check the response status code
        if (response.status === 200) {
          console.log('Response is OK (200)', response.body);  // Log the response body if status is 200
          this.router.navigate(["new-blog"])
        } else {
          console.log('Response not OK', response.status);
        }
      }, error => {
        if (error.status === 409) {
          // Blog does not exist, go to new blog creation page
          this.router.navigate(['blog-exists']);
        }
      });
  }

  getBlogForDate() {
    if (!this.selectedDate) {
      alert('Please select a date.');
      return;
    }

    const formattedDate = this.formatDate(this.selectedDate); // Format to dd-mm-yyyy
    this.http.get(`http://localhost:8080/get?date=${formattedDate}`).subscribe({
      next: (data) => {
        this.router.navigate(['/view-blog'], { state: { blog: data, date: formattedDate } });
      },
      error: (err) => {
        console.error('No blog found or error occurred:', err);
        alert('No blog found for the selected date.');
      }
    });
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}


