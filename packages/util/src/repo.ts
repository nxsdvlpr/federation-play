#!/usr/bin/env node
import * as fs from 'fs';
import * as yaml from 'yaml';
import * as path from 'path';

export const repo = () => {
  const file = fs.readFileSync(
    path.join(__dirname, '../../../repo.yaml'),
    'utf8',
  );
  const repo = yaml.parse(file);

  return repo;
};
