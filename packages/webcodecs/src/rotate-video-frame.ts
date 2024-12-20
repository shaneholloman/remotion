import {calculateNewDimensionsFromDimensions} from './rotation';

export const normalizeVideoRotation = (rotation: number) => {
	return ((rotation % 360) + 360) % 360;
};

export const rotateVideoFrame = ({
	frame,
	rotation,
}: {
	frame: VideoFrame;
	rotation: number;
}) => {
	const normalized = ((rotation % 360) + 360) % 360;
	if (normalized % 360 === 0) {
		return frame;
	}

	if (normalized % 90 !== 0) {
		throw new Error('Only 90 degree rotations are supported');
	}

	const {height, width} = calculateNewDimensionsFromDimensions({
		height: frame.displayHeight,
		width: frame.displayWidth,
		rotation,
	});

	const canvas = new OffscreenCanvas(width, height);
	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('Could not get 2d context');
	}

	canvas.width = width;
	canvas.height = height;

	if (normalized === 90) {
		ctx.translate(width, 0);
	} else if (normalized === 180) {
		ctx.translate(width, height);
	} else if (normalized === 270) {
		ctx.translate(0, height);
	}

	ctx.rotate(normalized * (Math.PI / 180));
	ctx.drawImage(frame, 0, 0);

	return new VideoFrame(canvas, {
		displayHeight: height,
		displayWidth: width,
		duration: frame.duration ?? undefined,
		timestamp: frame.timestamp,
	});
};
