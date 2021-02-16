import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAvatarComponent } from './create-avatar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CreateAvatarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [CreateAvatarComponent],
  entryComponents: [CreateAvatarComponent],
})
export class CreateAvatarModule {}
