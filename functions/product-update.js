const faunaDb = require('faunadb');
const verifyWebhookIntegrity = require('shopify-verify-webhook');
const axios = require('axios');

const query = faunaDb.query;
const client = new faunaDb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = function (event, context, callback) {
  const isValid = verifyWebhookIntegrity(
    process.env.SHOPIFY_WEBHOOK_KEY,
    event.headers['x-shopify-hmac-sha256'],
    event.body
  );

  if (isValid) {
    const body = JSON.parse(event.body);

    const { id } = body;

    delete body.updated_at;
    body.variants.forEach(variant => {
      delete variant.updated_at;
      delete variant.inventory_quantity;
      delete variant.old_inventory_quantity;
    });

    const bodyString = JSON.stringify(body);

    client
      .query(query.Get(query.Match(q.Index('product_by_id'), id)))
      .then(result => {
        if (result.data.product !== bodyString) {
          client
            .query(
              q.Update(result.ref, {
                data: { product: bodyString },
              })
            )
            .then(() => {
              axios.post(process.env.NETLIFY_REBUILD_URL);
            })
            .catch(e => {
              console.log('error updating product', e);
            });
        }
      })
      .catch(() => {
        client
          .query(
            query.Create(query.Collection('products'), {
              data: { id, product: bodyString },
            })
          )
          .then(() => {
            axios.post(process.env.NETLIFY_REBUILD_URL);
          })
          .catch(e => {
            console.log('error adding to db:', e);
          });
      });
  } else {
    callback(null, {
      statusCode: 403,
      body: 'Error',
    });
  }
};
