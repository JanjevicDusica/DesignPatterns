import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [MessageComponent],
})
export class MessageModule {}
