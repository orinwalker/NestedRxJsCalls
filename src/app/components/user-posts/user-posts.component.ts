import { Component, OnInit } from '@angular/core';
import { UserPostDataService } from '../../../services/user-post-data.service';
import { IUser} from '../../../interfaces/user-interface';
import { IPosts } from 'src/interfaces/posts-interface';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Array<IPosts>;

  constructor(private data: UserPostDataService) {
  }

  ngOnInit() {
    this.data.GetAllPosts().subscribe((userPosts) => {
      const postArray = userPosts as Array<IPosts>;
      postArray.forEach(post => {
        // console.log(`post.userId: ${post.userId}`)
        this.data.GetUserById(post.userId).subscribe(user => {
            // console.log(`The user is: ${JSON.stringify(user)}`);
            post.user = user as IUser;
        });
      });
      this.posts = postArray;
    });
  }
}
