let OSS = require('ali-oss')
const fs = require('fs')
const path = require('path')

let client = new OSS({
  bucket: 'opensource-microapp',
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI4GCmLfs7pZ89ViXk6Kkw',
  accessKeySecret: process.env.OSS_S
})

const prefix = `app/alicloud-component-docs/`

async function del() {
  const list = await client.list({
    prefix,
    'max-keys': 1000
  })
  list.objects = list.objects || []
  await Promise.all(list.objects.map(v => client.delete(v.name)))
  console.log(`successfully delete ${list.objects.length} old files`)
}

async function main() {
  await del()

  const baseDir = path.join(__dirname, '../build')
  const files = fs.readdirSync(baseDir)

  let successCount = 0

  await Promise.all(
    files.map(async filename => {
      await client.put(`${prefix}${filename}`, path.join(baseDir, filename))
      console.log(`[success] [${++successCount}/${files.length}] ${filename}`)
    })
  )
}

main()
