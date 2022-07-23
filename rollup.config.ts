import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import strip from '@rollup/plugin-strip'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  input: 'src/index.ts',
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  output: {
    file: 'dist/index.js'
  },
  plugins: [
    // nodeResolve({preferBuiltins: true}),
    // commonjs({
    //   // defaultIsModuleExports:true
    // }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    // terser(),
    json(),
    // strip({
    //   include: '**/*.(ts|js)',
    //   labels: ['unittest'],
    //   // functions:[ 'console.log']
    // }),
  ],
})
