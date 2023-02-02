import { modulePlop } from './generators/module.plop.mjs';

export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator('module', modulePlop);
}
