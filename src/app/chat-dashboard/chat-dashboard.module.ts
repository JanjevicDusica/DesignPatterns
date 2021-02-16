import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDashboardComponent } from './chat-dashboard.component';
import { ChatCardModule } from './chat-card/chat-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ChatDashboardComponent],
  imports: [CommonModule, ChatCardModule, FlexLayoutModule],
  exports: [ChatDashboardComponent],
})
export class ChatDashboardModule {}
