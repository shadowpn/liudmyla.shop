const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

export async function fetchProducts() {
  const res = await fetch(`https://${domain}/api/2024-04/graphql.json`, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          products(first: 10) {
            edges {
              node {
                id
                title
                handle
                images(first: 1) {
                  edges {
                    node { originalSrc }
                  }
                }
                variants(first: 1) {
                  edges {
                    node { price }
                  }
                }
              }
            }
          }
        }
      `
    }),
  });

  const json = await res.json();
  return json.data.products.edges.map(edge => edge.node);
}
