export type PostTypes = {
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    name: string;
  };
  setPostId: () => void;
  handleDelete: any;
};
