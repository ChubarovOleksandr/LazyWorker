import { makeAutoObservable } from 'mobx';
import { v4 } from 'uuid';

import { ExtraPropsInterface, ModalComponentProps, ModalInterface } from './interface';

class ModalStore {
  modals: ModalInterface<any>[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  open = <R>(Component: React.FC<ModalComponentProps<R>>, props?: ExtraPropsInterface) => {
    return new Promise<R>(resolve => {
      const newModal: ModalInterface<R> = {
        id: v4(),
        Component,
        props,
        resolve,
      };

      this.modals.push(newModal);
    });
  };

  close = (id: string) => {
    this.modals = this.modals.filter(modal => modal.id !== id);
  };
}

export const modalStore = new ModalStore();
