const router = require('express')();
const request = require('request');
const { createWebAPIRequest } = require('../utils/req');

router.get('/', (req, res) => {
  const rid = req.query.id
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    offset: req.query.offset || 0,
    rid: rid,
    limit: req.query.limit || 20,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    `/weapi/v1/resource/comments/R_SO_4_${rid}/?csrf_token=`,
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})

module.exports = router