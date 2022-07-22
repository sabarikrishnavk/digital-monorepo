
const params = require('../es-mapping/useraction');
const PRODUCTS = require('../data/useraction.json').orderitems;
const {Client} = require('@elastic/elasticsearch');
const _ = require('lodash');
const { zip } = require('lodash');

/**
 * *** ElasticSearch *** client
 * @type {Client}
 */
const client = new Client({
  node: ['http://127.0.0.1:9200']
});

const INDEXNAME = "useraction";

async function run () {
  let isExist = await client.indices.exists({
    index: INDEXNAME 
  }); 

  if(isExist){
    console.log('index exists'); 
    await client.indices.delete({index: INDEXNAME});
  }
  
  await client.indices.create({
    index: INDEXNAME,
    body: params 
  }, { ignore: [400] })

 

  const operations = PRODUCTS.flatMap(doc => [{ index: { _index:INDEXNAME } }, doc])

  const bulkResponse = await client.bulk({ refresh: true, operations })

  if (bulkResponse.errors) {
    const erroredDocuments = []
    // The items array has the same order of the dataset we just indexed.
    // The presence of the `error` key indicates that the operation
    // that we did for the document has failed.
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0]
      if (action[operation].error) {
        erroredDocuments.push({
          // If the status is 429 it means that you can retry the document,
          // otherwise it's very likely a mapping error, and you should
          // fix the document before to try it again.
          status: action[operation].status,
          error: action[operation].error,
          operation: body[i * 2],
          document: body[i * 2 + 1]
        })
      }
    })
    console.log(erroredDocuments)
  }

  const count = await client.count({ index: INDEXNAME})
  console.log(count)
}

run().catch(console.log)

