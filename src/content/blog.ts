export function getBlogSlug(postId: string) {
	return postId.replace(/^\d+-/, '');
}

function getBlogPostNumber(postId: string) {
	const match = postId.match(/^(\d+)-/);
	return match ? Number.parseInt(match[1], 10) : -1;
}

export function sortBlogEntriesByNumberDesc<T extends { id: string }>(posts: T[]) {
	return [...posts].sort((a, b) => getBlogPostNumber(b.id) - getBlogPostNumber(a.id));
}
