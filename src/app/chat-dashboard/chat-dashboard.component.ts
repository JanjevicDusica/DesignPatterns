import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Avatar } from '../Models/Avatar';
import { AppState } from '../store/app.state';
import { AvatarsState } from '../store/reducers/avatar.reducer';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.css'],
})
export class ChatDashboardComponent implements OnInit, OnDestroy {
  private avatarSubscription: Subscription;
  public avatars: Avatar[];

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.avatarSubscription = this.store
      .select((state) => state.avatars)
      .subscribe((avatarState: AvatarsState) => {
        this.avatars = avatarState.avatars;
      });
  }

  ngOnDestroy(): void {
    this.avatarSubscription.unsubscribe();
  }
}
