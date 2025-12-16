export type PostStatus = "open" | "closed";

export type Gender = "男性" | "女性" | "その他";

export interface Post {
  id: string;
  title: string;
  content: string;
  prefecture: string;
  ageRange: string;
  gender: Gender;
  status: PostStatus;
  replyCount: number;
  createdAt: Date;
}

