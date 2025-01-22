import { Selector } from '@/app/tests/types';

type Role = {
  header: () => Selector;
};

export const role: Role = {
  header: () => ['heading', { level: 1, name: /ABC of Cocktails/i }],
};
