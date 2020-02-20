'use strict';

const Queue = require('./Queue');
const DoubleQueue = require('./Double-Queue');
const { peek, isEmpty, display, ophidinBank } = require('./Queue-Fns');

function queueTest() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ);
  console.log('###############');

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  display(starTrekQ);
}
// queueTest();

function doubleQueueTest() {
  const starTrekQ = new DoubleQueue();

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhara');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  // display(starTrekQ);
  // console.log('###############');

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  // display(starTrekQ);
  console.log(peek(starTrekQ));
}
// doubleQueueTest();

function ophidinBankTest() {
  const BQ = new Queue();

  BQ.enqueue('person a');
  BQ.enqueue('person b');
  BQ.enqueue('person c');
  BQ.enqueue('person d');
  BQ.enqueue('person e');
  BQ.enqueue('person f');

  ophidinBank(BQ);
}

ophidinBankTest();
