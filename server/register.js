import { register } from 'ts-node';
import testTSConfig from './tests/tsconfig.json';

register({
  files: true,
  transpileOnly: true,
  project: './tests/tsconfig.json'
});