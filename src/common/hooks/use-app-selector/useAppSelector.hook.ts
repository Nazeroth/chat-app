import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../types/root-state.type';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;