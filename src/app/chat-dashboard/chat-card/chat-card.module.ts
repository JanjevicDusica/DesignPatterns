import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatCardComponent } from './chat-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MessageModule } from './message/message.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MessageModule,
    FormsModule,
  ],
  exports: [ChatCardComponent],
})
export class ChatCardModule {}
