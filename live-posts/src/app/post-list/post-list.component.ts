import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Nature yenyewe ata wewe unanawuo, vitu vulai',
      '',
      'test@TestScheduler.com',
      new Date()
    ),
    new Post(
      'New York',
      'Concrete jungle where dreams are made of',
      '',
      'test@TestScheduler.com',
      new Date()
    ),
    new Post(
      'Dubai',
      'The Rose of the desert',
      '',
      'test@TestScheduler.com',
      new Date()
    ),
    new Post(
      'Nairobi',
      'Green city under the sun',
      '',
      'test@TestScheduler.com',
      new Date()
    ),
  ];
  constructor() {}
}
