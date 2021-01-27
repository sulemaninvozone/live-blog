const express = require('express');
const { spawn } = require('child_process');
const perfy = require('perfy');

const app = express();
const port = process.env.PORT || 8000;
let isBuild = false;

// Serve gatsby build site
app.use(express.static(`${__dirname}/public`));

app.post('/deploy', async (req, res) => {
  if (!isBuild) {
    isBuild = true;
    console.info(`Build is started.`);
    perfy.start('build-time');
    const build = spawn('npm', ['run', 'build']);
    build.stdout.on('data', (data) => {
      console.log(`${data}`);
    });
    build.stderr.on('data', (error) => {
      isBuild = false;
      console.error(`Build failed with error ${error}`);
    });

    build.on('close', (code) => {
      isBuild = false;
      if (code === 0) {
        console.info('Project has been build successfully.');
        const result = perfy.end('build-time');
        console.info(`Build time: ${result.time} seconds`);
        console.info('Server will restart.');
        process.exit(1);
      } else if (code === 1) {
        console.error(`Build failed with error`);
      }
    });
    return res.send('Build is in progress');
  }

  return res.send('Build is already in progress');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
