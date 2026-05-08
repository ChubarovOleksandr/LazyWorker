import { type ReactNode, useEffect } from 'react';
import { Theme } from '@radix-ui/themes';
import { observer } from 'mobx-react-lite';

import { authStore } from '@store/authStore';
import { themeStore } from '@store/themeStore';

type ThemeRootProps = {
  children: ReactNode;
};

export const ThemeRoot = observer(({ children }: ThemeRootProps) => {
  const { theme, radixAppearance, syncFromSources } = themeStore;

  useEffect(() => {
    if (!authStore.loading) {
      void syncFromSources();
    }
  }, [authStore.loading, authStore.userId]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <Theme accentColor="gray" appearance={radixAppearance}>
      {children}
    </Theme>
  );
});
