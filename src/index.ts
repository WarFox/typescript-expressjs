import { app } from './app';
import { logger } from './config/winston';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`App listening at http://localhost:${PORT}`);
});
