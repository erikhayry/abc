export type Selector = [
  role: 'heading' | 'listitem' | 'list' | 'checkbox',
  options?: { level?: number; name?: string | RegExp; exact?: boolean },
];
