import { FormControl , ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
export class CustomPasswordValidator {

  static oldPasswordCheck(control: AbstractControl): ValidationErrors | null {
    return new Promise((resolve, reject ) => {
          setTimeout(() => {
            if (control.value === '1234' ) {
                resolve(null);
            }  else {
              resolve({
                oldPasswordCheck: true
              });
            }
          }, 5000);
    });
  }

  static passwordMatch(control: AbstractControl) {
     const np = control.get('newPassword').value;
     const cp = control.get('cnfPassword').value;
     console.log('np ', np);
     console.log('cp ', cp);
    if (np !== cp) {
      return { passwordMatch: true };
    }
    return null;
  }
 }
