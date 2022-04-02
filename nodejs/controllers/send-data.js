const axios = require("axios")
const path = require('path')
const readLastLines = require('read-last-lines');

const config = require("../config")
const formatDate = require("../helpers/format-date")

module.exports = () => {
  readLastLines.read(path.join('..',formatDate().year, formatDate().month, `${formatDate().day}.csv`), 1)
	.then((lines) => {
    const l = lines.split("\r\n")
    const lastData = l[l.length - 2].split(",")
    const data = {
      "location": config.location,
      "date": `${formatDate().year}-${formatDate().month}-${formatDate().day}T${lastData[0]}`,
      "ppm": lastData[1],
      "temperature": lastData[2]
    }
    axios.post(config.url, data)
      .then((out) => {
        console.log({req: data, res: out.data})
      })
      .catch((err) => console.log(err.response.data))
  })
  .catch(err => {
    console.log(err)
  })
}