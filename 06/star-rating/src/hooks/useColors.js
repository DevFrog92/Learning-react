import { useContext } from 'react';
import { ColorContext } from '../provider/ColorProvider';

export const useColors = () => useContext(ColorContext);