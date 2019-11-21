import {Driver} from './driver';
import { Negozio } from './negozio';
import {Spedizione} from './spedizione';

export interface Indirizzo {
    id: string;
    cap: number;
    citta: string;
    provincia: string;
    via: string;
    drivers?: Driver[];
    negozi?: Negozio[];
    spedizioni?: Spedizione[];
  }
