//Ex:File Uploading
//When a user uploads a profile picture on a website, they just click "Upload." The application doesn't want to worry about
//  how to compress the image, open a network connection, or stream the data. It just wants to call one simple method.

class FileUploader {
  // Public Abstraction: The simple "push-button" interface
  uploadImage(fileName) {
    this.#compressImage();
    this.#openConnection();
    this.#streamData();
    return `${fileName} uploaded successfully!`;
  }

  // Hidden internal steps (The "messy" details)
  #compressImage() {
    // Logic to shrink file size...
  }

  #openConnection() {
    // Logic to connect to the server...
  }

  #streamData() {
    // Logic to send the file piece by piece...
  }
}

// The consumer's code is clean and incredibly simple
const uploader = new FileUploader();
console.log(uploader.uploadImage("profile_pic.png"));

// uploader.#compressImage(); // Error: The consumer isn't allowed to mess with the internal steps