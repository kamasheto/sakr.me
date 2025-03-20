// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { execSync } from 'node:child_process';

export const SITE_TITLE = 'Mahmoud\'s';
export const SITE_DESCRIPTION = 'Welcome to yet another blog website!';
export const COMMIT_HASH = execSync('git rev-parse --short HEAD').toString().trim();
