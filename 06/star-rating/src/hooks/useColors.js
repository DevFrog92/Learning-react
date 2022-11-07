import { createContext, useState, useContext} from 'react';
import colorData from '../data/colors.json';
import { v4 } from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);