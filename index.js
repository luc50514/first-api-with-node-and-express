import express from 'express'
import player from './app/getPlayer.cjs'
import playerRouter from './routes/playersRouter.cjs'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger_output.json' assert { type: 'json' }

const PORT = 3000

const app = express()

app.use(express.json());
app.use('/players', playerRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(PORT, () =>
  console.log(`The Player API is running on: http://localhost:${PORT}.`)
)