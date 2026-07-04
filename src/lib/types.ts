export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  readTime: string;
  publishedAt: string;
  author: Author;
  likes: number;
  commentsCount: number;
  tags: string[];
  featured?: boolean;
}

export interface Comment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  publishedAt: string;
}
