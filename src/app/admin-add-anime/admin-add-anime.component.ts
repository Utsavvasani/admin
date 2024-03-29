import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient module
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-admin-add-anime',
  templateUrl: './admin-add-anime.component.html',
  styleUrl: './admin-add-anime.component.css'
})
export class AdminAddAnimeComponent {
  genresArray: string[] = ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Space', 'Mystery'];

  addAnimeForm!: FormGroup; // Add '!' to tell TypeScript that this property will be initialized in the constructor

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient // Inject HttpClient service
  ) { } // Inject FormBuilder in the constructor
  ngOnInit(): void {
    // Initialize the registration form with form controls
    this.addAnimeForm = this.formBuilder.group({
      english_name: ['', [Validators.required]], 
      japanese_name: ['', Validators.required], 
      english_japanese_name: ['', [Validators.required]],
      description: ['', Validators.required],  
      type: ['', Validators.required] , 
      studio: ['', Validators.required] , 
      status: ['', Validators.required] , 
      duration: ['', Validators.required]  ,
      genres: [[]], // Initialize genres as a FormArray
      image: [null, Validators.required] // Set up image control for file uploading
    });
  }
  
  // Getters for easy access to form controls
// Inside your component class

// Getter method for english_name FormControl
get english_name() {
  return this.addAnimeForm.get('english_name');
}

// Getter method for japanese_name FormControl
get japanese_name() {
  return this.addAnimeForm.get('japanese_name');
}

// Getter method for english_japanese_name FormControl
get english_japanese_name() {
  return this.addAnimeForm.get('english_japanese_name');
}

// Getter method for description FormControl
get description() {
  return this.addAnimeForm.get('description');
}

// Getter method for type FormControl
get type() {
  return this.addAnimeForm.get('type');
}

// Getter method for studio FormControl
get studio() {
  return this.addAnimeForm.get('studio');
}

// Getter method for status FormControl
get status() {
  return this.addAnimeForm.get('status');
}

// Getter method for duration FormControl
get duration() {
  return this.addAnimeForm.get('duration');
}

ngAfterViewInit(): void {
  $('.select2').select2();
}

// Getter method for genres FormArray
get genres() {
  return this.addAnimeForm.get('genres') as FormArray;
}


  // Method to get the image FormControl
  get image() {
    return this.addAnimeForm.get('image')!;
  }
  
  // Method to handle file change event and set the file to the image FormControl
  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];
        // Set the label's text to the name of the selected file
        const label = inputElement.nextElementSibling as HTMLLabelElement;
        if (label) {
            label.innerText = file.name;
        }

        // Validate image dimensions
        const img = new Image();
        img.onload = () => {
            if (img.width !== 300 || img.height !== 440) {
                window.alert("Please upload an image with dimensions 300x440.");
                // Clear the file input
                inputElement.value = "";
                // Reset the label's text
                if (label) {
                    label.innerText = "Choose file";
                }
                // Reset the image FormControl
                this.image.setValue(null);
            } else {
                // Image dimensions are valid, set the file to the image FormControl
                this.image.setValue(file);
            }
        };
        img.src = URL.createObjectURL(file);
    }
}


   // Method to handle form submission
   addAnime() {
    if (this.addAnimeForm.valid) {
      const formData = this.addAnimeForm.value;

      // Make HTTP POST request to backend API
      this.http.post<any>('http://localhost:4000/add-anime', formData).subscribe(
        response => {
         
          // Optionally, reset the form after successful submission
          this.addAnimeForm.reset();
          window.alert('Anime Adding successfull!!');
          // Navigate to the login page after successful registration
         this.router.navigate(['']);
        },
        error => {
         console.log(error)
        }
      );
    } else {
      // Mark all form controls as touched to display validation messages
      this.addAnimeForm.markAllAsTouched();
    }
  }
}
