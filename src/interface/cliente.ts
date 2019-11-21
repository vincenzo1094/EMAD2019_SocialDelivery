import {Negozio} from './negozio';

export interface Cliente {
    id: string;
    nome: string;
    cognome: string;
    email: string;
    avatar?: string;
    id_ordine?: string;
    preferiti?: Negozio[];
  }