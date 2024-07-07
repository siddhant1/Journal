export class Post {
  author: string;
  timestamp: string;
  commentsCount: number;
  emoji: string;
  content: string;

  constructor(
    author: string,
    timestamp: string,
    commentsCount = 0,
    emoji: string,
    content: string
  ) {
    this.author = author;
    this.timestamp = timestamp;
    this.commentsCount = commentsCount;
    this.emoji = emoji;
    this.content = content;
  }
}
