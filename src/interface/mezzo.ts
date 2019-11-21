import {Driver} from './driver';
import {Spedizione} from './spedizione';

export interface Mezzo {
    id: string;
    nome: string
    drivers?: Driver[];
    spedizioni?: Spedizione[];
     
  }