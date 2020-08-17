import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  enteredValues: any;
  uploadedPhoto: any;
  imageData: any;
  constructor() { }

  getValues(inputValues) {
    this.enteredValues = inputValues;
  }

  getphoto(uploadedFiles) {
    this.uploadedPhoto = uploadedFiles;
  }

  createImageFromBlob(image) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageData = reader.result;
    }, false);
    return this.imageData;
  }
}
