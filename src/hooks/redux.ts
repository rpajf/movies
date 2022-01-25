import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState,AppDispatch} from '../app/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//type of the useSelector refered to the state that is using
//giving alias to useSelector
