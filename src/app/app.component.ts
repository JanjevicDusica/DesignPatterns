import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAvatarComponent } from './create-avatar/create-avatar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public createAvatar: boolean = false;
  public createAvatarBtnTitle: string = 'Get Started';

  constructor(public dialog: MatDialog) {}

  public onCreateAvatar(): void {
    const dialogRef = this.dialog.open(CreateAvatarComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createAvatar = true;
      }
    });
  }
}
