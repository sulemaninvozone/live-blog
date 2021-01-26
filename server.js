const express = require('express');
const { spawn } = require('child_process');

const app = express();
const port = process.env.PORT || 8000;

// Serve gatsby build site
app.use(express.static(`${__dirname}/public`));

app.post('/deploy', async (req, res) => {
  console.log(`build is started.`);
  const build = spawn('npm', ['run','build']);
  build.stdout.setEncoding('utf8').on('data', (data) => {
    console.log(`${data}`);
  });
  build.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  build.on('close', (code) => {
    console.log('project has been build.');
    process.exit(1);
  });
  res.send('Build is in progress')
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
