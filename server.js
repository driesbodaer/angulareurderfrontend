const express = require('express');
const application = express();

application.use(express.static('./dist/eurder-frontend'));

application.listen(process.env.PORT || 4200);
