import { Component } from '@angular/core'
import { userReviews } from '../../data'
import {
  NgbCollapseModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'reviews-review-detail',
  standalone: true,
  imports: [NgbCollapseModule, NgbPaginationModule],
  templateUrl: './review-detail.component.html',
  styles: ``,
})
export class ReviewDetailComponent {
  userReviewsData = userReviews
  isCollapsed: boolean = false
}
