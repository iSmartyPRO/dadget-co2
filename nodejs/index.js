const cron = require('node-cron');
const sendData = require('./controllers/send-data')

sendData()
cron.schedule('* * * * *', () => {
  sendData()
  console.log('running a task every minute');
});