import {MediaParserEmitter} from './emitter';
import {MediaParserAbortError} from './errors';
import type {PauseSignal} from './pause-signal';
import {makePauseSignal} from './pause-signal';
import type {SeekSignal} from './seek-signal';
import {makeSeekSignal} from './seek-signal';

export type MediaParserController = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	abort: (reason?: any) => void;
	pause: PauseSignal['pause'];
	resume: PauseSignal['resume'];
	_experimentalSeek: SeekSignal['seek'];
	addEventListener: MediaParserEmitter['addEventListener'];
	removeEventListener: MediaParserEmitter['removeEventListener'];
	/**
	 * @deprecated Not public API
	 */
	_internals: {
		signal: AbortSignal;
		checkForAbortAndPause: () => Promise<void>;
		seekSignal: SeekSignal;
	};
};

export const mediaParserController = (): MediaParserController => {
	const abortController = new AbortController();
	const emitter = new MediaParserEmitter();
	const pauseSignal = makePauseSignal(emitter);
	const seekSignal = makeSeekSignal();

	const checkForAbortAndPause = async () => {
		if (abortController.signal.aborted) {
			throw new MediaParserAbortError('Aborted');
		}

		await pauseSignal.waitUntilResume();
	};

	return {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		abort: (reason?: any) => {
			abortController.abort(reason);
			emitter.dispatchAbort(reason);
		},
		_experimentalSeek: seekSignal.seek,
		pause: pauseSignal.pause,
		resume: pauseSignal.resume,
		addEventListener: emitter.addEventListener,
		removeEventListener: emitter.removeEventListener,
		_internals: {
			signal: abortController.signal,
			checkForAbortAndPause,
			seekSignal,
		},
	};
};
