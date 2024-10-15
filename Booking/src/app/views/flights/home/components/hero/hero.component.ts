import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'flights-home-hero',
  standalone: true,
  imports: [DateFormInputDirective, SelectFormInputDirective, NgbNavModule, RouterLink],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
