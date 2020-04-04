import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: `./src/app.js`,
  output: {
    file: `./dist/${[`app`, process.env.BROWSERSLIST_ENV].filter(x => x).join(`.`)}.js`,
    name: `App`,
    format: `iife`,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser(),
    filesize(),
  ],
};
