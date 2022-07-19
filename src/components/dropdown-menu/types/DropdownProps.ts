export type DropdownProps = {
  postId: number;
  setEditedBody: (postTitle: string) => void;
  setEditedTitle: (postBody: string) => void;
  handleDelete: (postId: number) => void;
};
