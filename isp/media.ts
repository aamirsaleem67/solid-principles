// ❌ Bad → Fat interface → not all clients need all methods
interface IMediaPlayer {
    playAudio(file: string): void;
    playVideo(file: string): void;
}

class AudioPlayer implements IMediaPlayer {
    playAudio(file: string): void {
        console.log("Playing audio", file);
    }

    // ❌ forced to implement playVideo → but does nothing → violates ISP
    playVideo(file: string): void {
        throw new Error("Video not supported");
    }
}
