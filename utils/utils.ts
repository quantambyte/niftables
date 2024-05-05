export const requestAudioPermission = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (error) {
    console.error('Permission to use audio was denied:', error);
  }
};
