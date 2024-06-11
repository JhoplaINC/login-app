import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faThumbsUp, faPaperPlane, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {

  faComment = faComment;
  faThumbsUp = faThumbsUp;
  faPaperPlane = faPaperPlane;
  faArrowDown = faArrowTurnDown;

}
