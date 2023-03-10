import type { APIRoute } from 'astro';

export const get: APIRoute = async function get ({params, request}) {
  const sku = params.sku

  let price = 0

  switch (sku) {
    case '123': price = 50;
    break;
    case '456': price = 200;
  }

  return {
    body: JSON.stringify({
      price,
    }),
  };
}
