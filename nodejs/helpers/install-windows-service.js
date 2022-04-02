var Service = require('node-windows').Service
const path = require('path')

var svc = new Service({
  name:'CO2 Sender',
  description: 'Служба для отправки данных CO2 в базу данных',
  script: path.join(__dirname, '../index.js'),
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=8192'
  ]
});

svc.on('install',function(){
  svc.start();
});

svc.install();