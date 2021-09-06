import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessagesService {

  REMOVE_MESSAGE_IN_SECS = 15; // If value is 0, message will not be removed on timeout

  messages: any = [];

  constructor() {
  }

  addSuccessMessage(message: string, timeoutInSeconds: number = this.REMOVE_MESSAGE_IN_SECS) {
    this.addAndRemoveOnTimeout("SUCCESS", message, timeoutInSeconds);
  }

  addErrorMessage(message: string, timeoutInSeconds: number = this.REMOVE_MESSAGE_IN_SECS) {
    this.addAndRemoveOnTimeout("ERROR", message, timeoutInSeconds);
  }

  addWarningMessage(message: string, timeoutInSeconds: number = this.REMOVE_MESSAGE_IN_SECS) {
    this.addAndRemoveOnTimeout("WARNING", message, timeoutInSeconds);
  }

  addInfoMessage(message: string, timeoutInSeconds: number = this.REMOVE_MESSAGE_IN_SECS) {
    this.addAndRemoveOnTimeout("INFO", message, timeoutInSeconds);
  }

  private addAndRemoveOnTimeout(type: string, message: string, timeoutInSeconds: number) {
    const item = { type, message };
    this.messages.push(item);

    if (timeoutInSeconds > 0) {
      setTimeout(() => {
        const index = this.messages.indexOf(item);
        if (index > -1) {
          this.removeMessage(index);
        }
      }, (timeoutInSeconds * 1000));
    }
  }

  removeMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
