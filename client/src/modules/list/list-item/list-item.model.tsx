export interface ListItemItems {
  content: string;
  done: boolean;
  created: string;
  assigned?: string;
}

export interface ListItem {
  id: string;
  title: string;
  comment: string;
  items: ListItemItems[];
}

export interface ListItemComponentModel extends ListItem {
  clicked: () => void;
}