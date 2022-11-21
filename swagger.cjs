const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/playersRouter.cjs']

swaggerAutogen(outputFile, endpointsFiles)