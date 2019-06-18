

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');


const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
const createDevServerConfig = require('../config/webpackDevServer.config');

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST),
      )}`,
    ),
  );
  console.log(
    'If this was unintentional, check that you haven\'t mistakenly set it in your shell.',
  );
  console.log(
    `Learn more here: ${chalk.yellow('http://bit.ly/CRA-advanced-config')}`,
  );
  console.log();
}

// We require that you explictly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require('react-dev-utils/browsersHelper');

const express = require('express')
const faker = require('faker');
const API_SERVICE_PORT = 3001
const app = express()

app.get('/api/test', (req, res) => {
  res.send(JSON.stringify({ data: `Hello World ${faker.name.findName()}!` }))
});

app.get('/api/checkscorecard', (req, res) => {
  const data = [];

  for (let i = 0; i < 15; i++) {
    data.push({
      name: faker.finance.currencyCode(),
      status: faker.random.arrayElement(['red', 'yellow', 'green']),
      rot: faker.random.number({ min: 1, max: 40 }),
      gelb: faker.random.number({ min: 1, max: 40 }),
      gRun: faker.random.number({ min: 1, max: 60 }),
      date: faker.date.recent(90),
      nDef: faker.random.number({ min: 1, max: 80 }),
      nSusp: faker.random.number({ min: 1, max: 25 }),
      persentRot: faker.random.number({ min: 1, max: 100 }),
      persentGelb: faker.random.number({ min: 1, max: 100 }),
    })
  }
  res.send(JSON.stringify(data))
});

app.get('/api/govicurwes', (req, res) => {
  const data = {
    list: [],
    change: [],
  }

  const fakeData = () => {
    const dataValues = [];
    
    for (let i = 0; i < 4; i++) {
      dataValues.push(faker.random.arrayElement(
        [2.6, 0.3, 0.1, 2.2, -3.5, -4.4, 3.0, -5.8, -3.4, 3.1, -2.9, -2.9, -0.1, -1.7, -2.7, -3.7]
      ));
    }
    return dataValues;
  };
  
  for (let i = 0; i < 4; i++) {
    data.list.push({
      name: faker.finance.currencyCode(),
      data: fakeData(),
      // change: faker.random.number({ min: 3, max: 30 }),
    });
    data.change.push(faker.random.number({ min: 3, max: 30 }));
  }

  res.send(JSON.stringify(data))
});

app.get('/api/gruppe', (req, res) => {
  const data = []

  const fakeValue = () => faker.random.arrayElement(
    [0.3, 5.3, 1.4, 1.1, 2.7, 0.9]
  );

  for (let i = 0; i < 2; i++) {
    data.push({
      title: `Grouppe ${i+1}`,
      data: [
        {
          name: 'SLI',
          value: fakeValue(),
          prevValue: fakeValue(),
        },
        {
          name: 'Cash-YP',
          value: fakeValue(),
          prevValue: fakeValue(),
        },
        {
          name: 'QPR',
          value: fakeValue(),
          prevValue: fakeValue(),
        },
      ]
    })
  }

  res.send(JSON.stringify(data))
});

app.get('/api/kurs', (req, res) => {
  const fakeValue = () => faker.random.arrayElement(
    [ -0.68, -0.21, 0.9, -0.45, 1.45, -1.32, 1.71, 1.54, 1.61, 1.70, 2.75, -1.21]
  );

  const allocations = {
    title: 'ALLOKATIONSFAKTOR',
    data: [],
  };
  const kurs = {
    title: 'KURS-WÄHRUNG',
    data: [],
  }

  for (let i = 0; i < 6; i++) {
    kurs.data.push({
      name: faker.finance.currencyCode(),
      value: fakeValue(),
    });

    allocations.data.push({
      name: faker.random.arrayElement(['Dax', 'SDax', 'MDax', 'TecDax', 'Euro Stoxx', 'NASDAQ', 'AMEX', 'RUSSELL', 'CBOE', 'CSI 300', 'Hang Seng']),
      value: fakeValue(),
    })
  }
  res.send(JSON.stringify({ kurs, allocations }))
});

app.get('/api/rsxbottomup', (req, res) => {
  const data = [];

  for (let i=0; i < 3; i++) {
    data.push({
      title: faker.finance.accountName(),
      value: faker.random.number({ min: 15, max: 90 })
    })
  }
  res.send(JSON.stringify({ values: data }))
});

app.get('/api/scheduling', (req, res) => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push({
      date: faker.date.recent(40),
      type: faker.random.arrayElement(['Daily', 'Monthly', 'Quarterly']),
      status: faker.random.arrayElement(['red', 'yellow', 'green']),
      description: faker.lorem.sentence(4),
    })
  }
  res.send(JSON.stringify(data))
});

app.get('/api/sqdatenbaum', (req, res) => {
  const data = [];

  for (let i=0; i < 3; i++) {
    data.push({
      title: faker.company.companyName(),
      value: faker.random.number({ min: 15, max: 90 }),
    })
  }
  res.send(JSON.stringify({ values: data, treeData: [] }))
});

app.get('/api/swapcurwes', (req, res) => {
  const data = {
    list: [],
    change: [],
  }

  const fakeData = () => {
    const dataValues = [];
    
    for (let i = 0; i < 4; i++) {
      dataValues.push(faker.random.arrayElement(
        [1.2, 0.7, 0.4, -0.6, -1.0, 4.7, 2.0, -1, -2.4, 1.9, -5.2, -2.9, -3.7, -2.7, -1.7, -0.1]
      ));
    }
    return dataValues;
  };
  
  for (let i = 0; i < 4; i++) {
    data.list.push({
      name: faker.finance.currencyCode(),
      data: fakeData(),
      // change: faker.random.number({ min: 3, max: 30 }),
    });
    data.change.push(faker.random.number({ min: 3, max: 30 }));
  }

  res.send(JSON.stringify(data))
});

app.get('/api/systemstatus', (req, res) => {
  const data = [];

  for (let i=0; i < 3; i++) {
    data.push({
      date: faker.date.recent(15),
      description: faker.lorem.sentence(5),
    })
  }
  res.send(JSON.stringify(data))
});

app.get('/api/txdatenbaum', (req, res) => {
  const data = [];

  for (let i=0; i < 3; i++) {
    data.push({
      title: faker.company.companyName(),
      value: faker.random.number({ min: 15, max: 90 }),
    })
  }
  res.send(JSON.stringify({ values: data, treeData: [] }))
});

checkBrowsers(paths.appPath, isInteractive)
  .then(() => choosePort(HOST, DEFAULT_PORT))
  .then((port) => {
    if (port == null) {
      // We have not found a port.
      return;
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler(webpack, config, appName, urls, useYarn);
    // Load proxy config
    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
    // Serve webpack assets generated by the compiler over a web server.
    const serverConfig = createDevServerConfig(
      proxyConfig,
      urls.lanUrlForConfig,
    );
    const devServer = new WebpackDevServer(compiler, { ...serverConfig, proxy: {
      '/api': 'http://localhost:3001'
    }});

    app.listen(API_SERVICE_PORT, () => {
      console.log(
        `Started API SERVICE on port ${API_SERVICE_PORT}`
      )
    })

    // Launch WebpackDevServer.
    devServer.listen(port, HOST, (err) => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }
      console.log(chalk.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        devServer.close();
        process.exit();
      });
    });
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
