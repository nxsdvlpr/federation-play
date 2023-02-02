import * as bcrypt from 'bcrypt';
import slugify from 'slugify';
import { existsSync } from 'fs';
import { resolve } from 'path';

export const getEnvPath = (dest: string, env: string | undefined): string => {
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
};

export const makeSlug = (slug: string): string =>
  slugify(slug, {
    replacement: '-',
    lower: true,
    remove: /[*+~.()'"!:@#]/g,
  });

export const randomString = (length = 6): string =>
  Math.random().toString(36).substring(2, length);

export const genSalt = (rounds: number, minor: string): string =>
  bcrypt.genSaltSync(rounds, minor);

export const passwordHash = (
  password: string,
  salt: number | string = 10,
): string => bcrypt.hashSync(password, salt);

export const passwordCompare = (password: string, hash: string): string =>
  bcrypt.compareSync(password, hash);
