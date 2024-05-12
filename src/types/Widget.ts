export interface Widget {
    id?: string;
    isDark?: boolean;
    bg?: string;
    classes?: Record<string, string | Record<string, string>>;
  }