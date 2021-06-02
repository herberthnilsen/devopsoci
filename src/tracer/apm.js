const {
    Tracer,
    BatchRecorder,
    jsonEncoder: {JSON_V2}
  } = require('zipkin');
   
  const CLSContext = require('zipkin-context-cls');
  const {HttpLogger} = require('zipkin-transport-http');
   
  // Setup the tracer
  const tracer = new Tracer({
    ctxImpl: new CLSContext('zipkin'), // implicit in-process context
    recorder: new BatchRecorder({
      logger: new HttpLogger({
        endpoint: 'https://aaaac6fiu5egiaaaaaaaaaab4e.apm-agt.us-phoenix-1.oci.oraclecloud.com/20200101/observations/private-span?dataFormat=zipkin&dataFormatVersion=2&dataKey=A3ZHQ5OYM7IUG55RH5ZKB5JDCEHNPUZS', //Span collection endpoint URL setting
        jsonEncoder: JSON_V2 //Span format and encoding setting
      })
    }), // batched http recorder
    localServiceName: 'DevOpsDemo_app', // name of the application/service
    supportsJoin: false //Span join disable setting
  });

  module.exports = tracer;