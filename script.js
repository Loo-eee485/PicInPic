const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a media stream, pass to video element, and then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error here
  }
}

button.addEventListener("click", async () => {
  // Disable the button when clicked
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
// On Load
selectMediaStream();
