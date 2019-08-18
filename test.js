import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import stripDebug from '.';

test('strips debugging statements', async t => {
	const stream = stripDebug();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('function test(){debugger;}')
	}));

	const file = await promise;
	t.is(file.contents.toString(), 'function test(){}');
});
