export type NavigationItem = {
  name: string;
  href: string;
};

export type Author = {
  name: string;
  role: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image?: string; // Optional
  author: Author;
};

export type Article = BlogPost & {
  content: string;
  relatedPosts?: BlogPost[];
};
