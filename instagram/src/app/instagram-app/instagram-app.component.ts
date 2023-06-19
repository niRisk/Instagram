import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-app',
  templateUrl: './instagram-app.component.html',
  styleUrls: ['./instagram-app.component.css']
})
export class InstagramAppComponent implements OnInit {
 leftPanelItems:any[] = [];
 suggestedUsers:any[] = [];
 Posts:any[] = [];
 Avatars:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.Avatars = [
      {img:'./assets/Images/Avatar4.png',
      width:'100'},
      {img:'./assets/Images/Avatar3.png',
      width:'100'},
      {img:'./assets/Images/Avatar1.png',
      width:'100'},
      {img:'./assets/Images/Avatar2.png',
      width:'60'},
    ]

    this.leftPanelItems = [
      {
        icon:'home',
        title:'Home'
      },
      {
        icon:'search',
        title:'Search'
      },
      {
        icon:'explore',
        title:'Explore'
      },
      {
        icon:'airplay',
        title:'Reels'
      },
      {
        icon:'messages',
        title:'Messages'
      },
      {
        icon:'favorite_border',
        title:'Notifications'
      },
      {
        icon:'add_circle_outline',
        title:'Create'
      },
      {
        img:'./assets/Images/Avatar2.png',
        title:'Profile'
      }
    ];

    this.suggestedUsers = [
      {
        img:'./assets/Images/Avatar1.png',
        title:'Mantosh'
      },
      {
        img:'./assets/Images/Avatar3.png',
        title:'Sumanjit'
      },
      {
        img:'./assets/Images/Avatar4.png',
        title:'Aryaaz'
      }
    ];
    this.Posts = [
      {
        avatar:'./assets/Images/Avatar4.png',
        postImg:'./assets/Images/iphone-14-yelow.png',
        userId:'iamAryaaz'
      },
      {
        avatar:'./assets/Images/Avatar2.png',
        postImg:'https://images.indianexpress.com/2022/09/iPhone-14-2-1.jpg',
        userId:'i.ajantika'
      },
      {
        avatar:'./assets/Images/Avatar1.png',
        postImg:'https://imgix.bustle.com/uploads/image/2022/3/11/9831582b-786b-4c9b-9e1c-3ede4d4f1150-green-iphone-13-mini-13pro-review-19.jpg?w=414&fit=max&auto=format%2Ccompress',
        userId:'me.mantosh'
      },
      {
        avatar:'./assets/Images/Avatar3.png',
        postImg:'https://www.macworld.com/wp-content/uploads/2023/01/apple_iphone_12_purple_review_1.jpg?quality=50&strip=all',
        userId:'itsSuman'
      }

    ]
  }

}
