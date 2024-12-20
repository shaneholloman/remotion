import {mapAudioObjectTypeToCodecString} from '../../aac-codecprivate';
import {convertAudioOrVideoSampleToWebCodecsTimestamps} from '../../convert-audio-or-video-sample';
import type {Track} from '../../get-tracks';
import type {ParserContext} from '../../parser-context';
import {registerTrack} from '../../register-track';
import type {AudioOrVideoSample} from '../../webcodec-sample-types';
import {readAdtsHeader} from './adts-header';
import {MPEG_TIMESCALE} from './handle-avc-packet';
import type {TransportStreamPacketBuffer} from './process-stream-buffers';

export const handleAacPacket = async ({
	streamBuffer,
	options,
	programId,
}: {
	streamBuffer: TransportStreamPacketBuffer;
	options: ParserContext;
	programId: number;
}) => {
	const adtsHeader = readAdtsHeader(streamBuffer.buffer);
	if (!adtsHeader) {
		throw new Error('Invalid ADTS header - too short');
	}

	const {channelConfiguration, codecPrivate, sampleRate, audioObjectType} =
		adtsHeader;

	const isTrackRegistered = options.parserState.tracks.getTracks().find((t) => {
		return t.trackId === programId;
	});

	if (!isTrackRegistered) {
		const track: Track = {
			type: 'audio',
			codecPrivate,
			trackId: programId,
			trakBox: null,
			timescale: MPEG_TIMESCALE,
			codecWithoutConfig: 'aac',
			codec: mapAudioObjectTypeToCodecString(audioObjectType),
			// https://www.w3.org/TR/webcodecs-aac-codec-registration/
			description: undefined,
			numberOfChannels: channelConfiguration,
			sampleRate,
		};
		await registerTrack({
			track,
			options,
			container: 'transport-stream',
		});
	}

	const sample: AudioOrVideoSample = {
		cts: streamBuffer.pesHeader.pts,
		dts: streamBuffer.pesHeader.dts ?? streamBuffer.pesHeader.pts,
		timestamp: streamBuffer.pesHeader.pts,
		duration: undefined,
		data: new Uint8Array(streamBuffer.buffer),
		trackId: programId,
		type: 'key',
	};

	await options.parserState.onAudioSample(
		programId,
		convertAudioOrVideoSampleToWebCodecsTimestamps(sample, MPEG_TIMESCALE),
	);
};
