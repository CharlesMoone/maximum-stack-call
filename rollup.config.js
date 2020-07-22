import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'lib/maximum-stack-call.js',
    output: [
      {
        file: 'dist/maximum-stack-call.js',
        format: 'esm',
        name: 'MaximumStackCall',
      },
    ],
    plugins: [
      babel({
        exclude: ['node_modules'],
      }),
      commonjs(),
      resolve({
        mainFields: ['jsnext', 'main'],
        browser: true,
      }),
      terser(),
    ],
  },
];
