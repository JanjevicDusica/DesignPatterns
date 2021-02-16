import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Factory } from '../Patterns/Factory';
import { Avatar, Colors } from '../Models/Avatar';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { SetAvatars } from '../store/actions/avatar.actions';

@Component({
  selector: 'app-create-avatar',
  templateUrl: './create-avatar.component.html',
  styleUrls: ['./create-avatar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateAvatarComponent implements OnInit {
  public form: FormGroup;
  public availableColors = Colors;
  private avatars: Avatar[];

  constructor(
    private readonly factory: Factory,
    private readonly store: Store<AppState>,
    public dialogRef: MatDialogRef<CreateAvatarComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.inicialize();
  }

  public onCreateAvatar(): void {
    this.avatars = this.addAvatar();
    this.form.reset();
  }

  public onChat(): void {
    if (this.avatars.length > 1) {
      this.store.dispatch(SetAvatars({ avatars: [...this.avatars] }));
      this.dialogRef.close(true);
    } else {
      this.openSnackBar('Create at least two avatars');
    }
  }

  private addAvatar(): Avatar[] {
    return [
      ...this.avatars,
      this.factory.createAvatar(
        this.form.controls.fullName.value,
        this.form.controls.nickname.value,
        this.form.controls.gender.value,
        this.form.controls.eyeColor.value,
        this.form.controls.hairColor.value
      ),
    ];
  }

  private inicialize(): void {
    this.avatars = new Array();
    this.form = new FormGroup({
      fullName: new FormControl(),
      nickname: new FormControl(),
      gender: new FormControl(),
      eyeColor: new FormControl(),
      hairColor: new FormControl(),
    });
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, '', { duration: 2000 });
  }
}
