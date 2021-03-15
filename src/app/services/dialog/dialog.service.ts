import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private message: NzMessageService) {}

  public info(message: string): void {
    this.message.info(message);
  }

  public warning(message: string): void {
    this.message.warning(message);
  }

  public danger(message: string): void {
    this.message.error(message);
  }

  public success(message: string): void {
    this.message.success(message);
  }

  public loading(message: string): void {
    this.message.loading(message);
  }

  public remove(id?: string): void {
    this.message.remove(id);
  }
}
