/* Função Netlify — endpoint do simulado.
   Acessível em /api (ver redirecionamento no netlify.toml).
   Guarda os resultados no Netlify Blobs; um registro por aluno. */
import { getStore } from '@netlify/blobs';
import { CONFIG } from './lib/config.mjs';
import { handle } from './lib/core.mjs';

export default async (req) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };

  if (req.method !== 'POST')
    return new Response(JSON.stringify({ ok: false, erro: 'Método inválido.' }), { status: 405, headers });

  let body;
  try { body = await req.json(); }
  catch (e) { return new Response(JSON.stringify({ ok: false, erro: 'Requisição inválida.' }), { status: 400, headers }); }

  try {
    // consistência forte: leitura logo após escrita já enxerga o dado novo
    const store = getStore({ name: CONFIG.storeName, consistency: 'strong' });
    const resultado = await handle(body, store);
    return new Response(JSON.stringify(resultado), { status: 200, headers });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, erro: 'Erro interno. Tente novamente.' }), { status: 500, headers });
  }
};
