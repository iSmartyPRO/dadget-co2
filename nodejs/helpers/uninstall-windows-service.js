var Service = require('node-windows').Service;
const path = require('path')

var svc = new Service({
  name:'CO2 Sender',
  script: path.join(__dirname, '../index.js'),
});

svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.uninstall();