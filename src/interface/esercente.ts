import { Negozio } from './negozio';

export interface Esercente {
    id: string;
    nome: string;
    cognome: string;
    email: string;
    avatar?: string;
    negozi?: Negozio[];
  }