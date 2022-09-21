const express = require('express'),
  app = express(),
  fs = require('fs'),
  showdown = require('showdown'),
  converter = new showdown.Converter()

app.set('view engine', 'ejs')

app.get('/favicon.ico', (req, res) => {
  res.end()
})

app.use('/static', express.static('static'))

function error(res) {
  let md = fs.readFileSync(`./views/error.md`).toString()
  res.render('page', {
    md: converter.makeHtml(md),
    dir: '404',
    title: '404',
    files: []
  })
}

app.get('/', (req, res) => {
  res.redirect('/home')
})

app.get('/:id', (req, res) => {
  try {
    let md = fs.readFileSync(`./pages/${req.params.id}.md`).toString()
    md = converter.makeHtml(md)
    let files = fs.readdirSync('./pages')
    var file = [
      ...files.map((file) => {
        let name = file.split('.')[0]
        return {
          name: name,
          url: `/${name}`
        }
      }),
    ]

    res.render('page', {
      md: md,
      dir: req.params.id,
      title: md.split('\n')[0].split('>')[1].split('<')[0],
      files: file
    })
  } catch (err) {
    // console.log(err)
    error(res)
  }
})

app.get('*', (req, res) => {
  error(res)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})