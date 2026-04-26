import { existsSync } from 'node:fs';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const postsDir = join(process.cwd(), 'src/content/blog');
const filenamePattern = /^(\d+)-(.+)\.(md|mdx)$/;
const defaultHeroImage = '/placeholders/blog-placeholder-2.jpg';

function getToday() {
	return new Date().toISOString().slice(0, 10);
}

async function main() {
	await mkdir(postsDir, { recursive: true });

	const entries = await readdir(postsDir, { withFileTypes: true });
	const numberedPosts = entries
		.filter((entry) => entry.isFile())
		.map((entry) => entry.name.match(filenamePattern))
		.filter((match): match is RegExpMatchArray => match !== null);

	const highestNumber = numberedPosts.reduce(
		(max, match) => Math.max(max, Number.parseInt(match[1], 10)),
		0,
	);
	const width = Math.max(
		2,
		...numberedPosts.map((match) => match[1].length),
	);
	const nextNumber = highestNumber + 1;
	const nextPrefix = String(nextNumber).padStart(width, '0');
	const filename = `${nextPrefix}-untitled.md`;
	const filepath = join(postsDir, filename);

	if (existsSync(filepath)) {
		throw new Error(`Refusing to overwrite existing file: ${filepath}`);
	}

	const contents = `---
title: 'untitled'
description: ''
pubDate: '${getToday()}'
heroImage: '${defaultHeroImage}'
---
lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.

lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
`;

	await Bun.write(filepath, contents);
	console.log(`Created ${filepath}`);
}

await main();
