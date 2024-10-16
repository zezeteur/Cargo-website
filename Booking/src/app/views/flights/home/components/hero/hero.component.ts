import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component, OnInit } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterLink } from '@angular/router'
import { SearchService } from '@core/services/search.service'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'flights-home-hero',
  standalone: true,
  imports: [DateFormInputDirective, SelectFormInputDirective, NgbNavModule, RouterLink, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private search: SearchService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.searchForm = this.fb.group({
      start: this.fb.control("", [Validators.required]),
      destination: this.fb.control("", [Validators.required]),
      date: this.fb.control("", [Validators.required]),

    });


  }


  onSearch($event: MouseEvent) {
    console.log(this.searchForm.value);
    this.search.search(this.searchForm.value.start, this.searchForm.value.destination, this.searchForm.value.date).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }
}
