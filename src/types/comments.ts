export type Comment = {
  id: string;
  date: string;
  comment: string;
  rating: number;
  user: {
    avatarUrl: string;
    isPro: boolean;
    userName: string;
  };
};

export type Comments = Comment[];
