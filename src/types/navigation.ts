export interface NavigationItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}
