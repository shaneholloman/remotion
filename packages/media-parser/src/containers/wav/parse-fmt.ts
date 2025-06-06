import type {ParseResult} from '../../parse-result';
import {registerAudioTrack} from '../../register-track';
import type {ParserState} from '../../state/parser-state';
import {WEBCODECS_TIMESCALE} from '../../webcodecs-timescale';
import type {WavFmt} from './types';

export const parseFmt = async ({
	state,
}: {
	state: ParserState;
}): Promise<ParseResult> => {
	const {iterator} = state;
	const ckSize = iterator.getUint32Le(); // chunkSize
	const box = iterator.startBox(ckSize);
	const audioFormat = iterator.getUint16Le();
	if (audioFormat !== 1) {
		throw new Error(
			`Only supporting WAVE with PCM audio format, but got ${audioFormat}`,
		);
	}

	const numberOfChannels = iterator.getUint16Le();
	const sampleRate = iterator.getUint32Le();
	const byteRate = iterator.getUint32Le();
	const blockAlign = iterator.getUint16Le();
	const bitsPerSample = iterator.getUint16Le();

	const format =
		bitsPerSample === 16
			? 'pcm-s16'
			: bitsPerSample === 32
				? 'pcm-s32'
				: bitsPerSample === 24
					? 'pcm-s24'
					: null;
	if (format === null) {
		throw new Error(`Unsupported bits per sample: ${bitsPerSample}`);
	}

	const wavHeader: WavFmt = {
		bitsPerSample,
		blockAlign,
		byteRate,
		numberOfChannels,
		sampleRate,
		type: 'wav-fmt',
	};

	state.structure.getWavStructure().boxes.push(wavHeader);
	await registerAudioTrack({
		track: {
			type: 'audio',
			codec: format,
			codecData: null,
			description: undefined,
			codecEnum: format,
			numberOfChannels,
			sampleRate,
			originalTimescale: 1_000_000,
			trackId: 0,
			startInSeconds: 0,
			timescale: WEBCODECS_TIMESCALE,
		},
		container: 'wav',
		registerAudioSampleCallback: state.callbacks.registerAudioSampleCallback,
		tracks: state.callbacks.tracks,
		logLevel: state.logLevel,
		onAudioTrack: state.onAudioTrack,
	});

	box.expectNoMoreBytes();

	return Promise.resolve(null);
};
