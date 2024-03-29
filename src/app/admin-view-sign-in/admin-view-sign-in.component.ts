import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-sign-in',
  templateUrl: './admin-view-sign-in.component.html',
  styleUrls: ['./admin-view-sign-in.component.css']
})
export class AdminViewSignInComponent implements OnInit {
  signInDetails: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSignInDetails(); // Call the function to fetch sign-in details when the component initializes
  }

  getSignInDetails() {
    // Make HTTP GET request to your backend route
    this.http.get<any>('http://localhost:4000/get-Signin-details').subscribe(
      (data) => {
        // Assign the fetched sign-in details to the variable
        this.signInDetails = data
      },
      (error) => {
        console.error('Error fetching sign-in details:', error);
      }
    );
  }
}
