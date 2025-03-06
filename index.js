const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('./', {
    setHeaders: (res, filePath) => {
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    }
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})