import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/i18n';
import React from 'react';
import { render } from '@testing-library/react';

export function renderComponent(component: React.ReactElement) {
  render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
}
