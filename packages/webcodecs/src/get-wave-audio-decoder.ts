import type {AudioOrVideoSample} from '@remotion/media-parser';
import type {
	CreateAudioDecoderInit,
	WebCodecsAudioDecoder,
} from './audio-decoder';

// TODO: Should also be subject to throttling
export const getWaveAudioDecoder = ({
	onFrame,
	track,
	sampleFormat,
}: Pick<CreateAudioDecoderInit, 'onFrame' | 'track'> & {
	sampleFormat: AudioSampleFormat;
}): WebCodecsAudioDecoder => {
	let queue = Promise.resolve();

	const processSample = async (audioSample: AudioOrVideoSample) => {
		await onFrame(
			new AudioData({
				data: audioSample.data,
				format: sampleFormat,
				numberOfChannels: track.numberOfChannels,
				numberOfFrames: audioSample.data.byteLength / 2,
				sampleRate: track.sampleRate,
				timestamp: audioSample.timestamp,
			}),
		);
	};

	return {
		close() {
			return Promise.resolve();
		},
		processSample(audioSample) {
			queue = queue.then(() => processSample(audioSample));
			return queue;
		},
		flush: () => Promise.resolve(),
		waitForFinish: () => Promise.resolve(),
	};
};
