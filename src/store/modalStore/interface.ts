import { ResolveType } from '@interfaces/utils/promiseType';

export type ExtraPropsInterface = Record<string, unknown>;

export interface ModalComponentProps<R = void> {
  resolve: ResolveType<R>;
  props?: ExtraPropsInterface;
}

export interface ModalInterface<R> {
  id: string;
  Component: React.FC<ModalComponentProps<R>>;
  props?: ExtraPropsInterface;
  resolve: ResolveType<R>;
}
