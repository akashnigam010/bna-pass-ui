import {ToastOptions, ToastyService} from 'ng2-toasty';

export class GenericComponent {
  constructor(private toastyService: ToastyService) {}

  addToast(title: string, message: string, isError: boolean) {
    // Or create the instance of ToastOptions
    const toastOptions: ToastOptions = {
      title: title,
      msg: message,
      showClose: true,
      timeout: 3000,
      theme: 'default'
    };

    if (isError) {
      this.toastyService.error(toastOptions);
    } else {
      this.toastyService.success(toastOptions);
    }
  }
}
