import {Negozio} from './negozio';
import { Ordine } from './ordine';

export interface Cliente {
    id?: string;
    nome?: string;
    cognome?: string;
    email?: string;
    citta?: string;
    indirizzo?: string;
    avatar?: string;
    ordini?: Ordine[];
    preferiti?: Negozio[];
  }
