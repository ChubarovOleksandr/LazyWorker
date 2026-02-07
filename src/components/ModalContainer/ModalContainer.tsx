import { createPortal } from 'react-dom';
import { observer } from 'mobx-react-lite';

import { modalStore } from '@store/modalStore/modalStore';
import { isEmptyArray } from '@utils/format';

export const ModalContainer = observer(() => {
  const { modals, close } = modalStore;

  if (isEmptyArray(modals)) {
    return null;
  }

  return createPortal(
    <div className="modal-root">
      {modals.map(({ id, Component, props, resolve }) => (
        <Component
          key={id}
          {...props}
          resolve={(value: any) => {
            resolve(value);
            close(id);
          }}
        />
      ))}
    </div>,
    document.body,
  );
});
