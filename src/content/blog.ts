export function getBlogSlug(postId: string) {
	return postId.replace(/^\d+-/, '');
}
