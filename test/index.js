import test from 'ava';
import makeCN from '../src';

const classMapping = {
  '-virtual-class-a': 'bold nowrap right-align',
  // One virtual class can reference another virtual class
  '-virtual-class-b': 'border-right m1 -virtual-class-a',
  '-virtual-class-c': 'px2',
};

const cn = makeCN(classMapping);

test('simple convertion', t => {
  t.is(cn('-virtual-class-a'), '-virtual-class-a bold nowrap right-align');
});

test('recursive convertion', t => {
  t.is(
    cn('-virtual-class-b'),
    '-virtual-class-b border-right m1 -virtual-class-a bold nowrap right-align'
  );
});

test('complex convertion (provided by classnames)', t => {
  t.is(
    cn('overflow-auto regular', {
      '-virtual-class-a': true,
      '-virtual-class-b': true,
      '-virtual-class-c': true,
    }),
    'overflow-auto regular -virtual-class-a bold nowrap right-align -virtual-class-b border-right m1 -virtual-class-a bold nowrap right-align -virtual-class-c px2'
  );
});
