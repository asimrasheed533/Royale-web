import { CSSProperties, ReactNode } from "react";

export interface IListingAction {
  name: string;
  onClick: () => void;
  icon: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  sale?: boolean;
}

export interface IListingTable {
  style?: Object;
  children: ReactNode;
  actions?: IListingAction[];
  selectedRows?: string[];
  setSelectedRows?: (value: string[]) => void;
  totalPages?: number;
  sortData?: {
    key: string;
    order: "asc" | "desc";
  };
  setSortData?: (value: { key: string; order: "asc" | "desc" }) => void;
  headerItems: {
    key: string;
    name: string;
    hasImage?: boolean;
    style?: CSSProperties;
  }[];
  data: any[];
  onAdd?: () => void;
  isFetchingData?: boolean;
  isStale?: boolean;
  noCheckbox?: boolean;
}
export interface IListingTabs {
  tabs: {
    name: string;
    number: number;
  }[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export interface IInput {
  name: string;
  label: string;
  id?: string;
  value?: string;
  type?: string;
  error?: string;
  onChange?: (e: any) => void;
  autoFocus?: boolean;
  required?: boolean;
  style?: CSSProperties;
}
export interface IOption {
  value: any;
  label: string;
}
export interface ISelect {
  placeholder?: string;
  options: IOption[];
  value?: IOption | IOption[] | null;
  onChange?: (newValue: any) => void;
  label: string;
  isMulti?: boolean;
  disabled?: boolean;
}
export interface ILinks {
  label: string;
  children: {
    href: string;
    label: string;
    icon: ReactNode;
    preloadLink?: string;
  }[];
}
