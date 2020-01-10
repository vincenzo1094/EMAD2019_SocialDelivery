import { stato_ordine } from './stato_ordine';
import {Prodotto} from './prodotto';
import { ProdottoOrdine } from './prodotto_ordine';

export interface Ordine {
    id?: string;
    stato: stato_ordine;
    id_negozio: string;
    id_spedizione?: string;
    prodotti?: ProdottoOrdine[];
    totale?: number;
  }