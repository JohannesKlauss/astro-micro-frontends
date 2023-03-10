import type {APIRoute} from 'astro';

export const get: APIRoute = async function get({params}) {
  let skuImage = "eicher";

  switch (params.sku) {
    case "123":
      skuImage = "eicher";
      break
    case "456":
      skuImage = "porsche";
      break
  }

  const response = await fetch(`https://mi-fr.org/img/${skuImage}.svg`);
  const buffer = Buffer.from(await response.arrayBuffer());
  return {
    body: buffer,
    encoding: 'binary',
  };
}
