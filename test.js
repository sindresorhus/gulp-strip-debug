import {Buffer} from 'node:buffer';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import stripDebug from './index.js';

test('strips debugging statements', async t => {
	const stream = stripDebug();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('function test(){const x = a ?? b; debugger;}'),
	}));

	const file = await promise;
	t.is(file.contents.toString(), 'function test() {\n  const x = a ?? b;\n}');
});

test('strips `console.log()` statements', async t => {
	const stream = stripDebug();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		contents: Buffer.from('function test(){console.log(...colors);}'),
	}));

	const file = await promise;
	t.is(file.contents.toString(), 'function test() {\n  void 0;\n}');
});
