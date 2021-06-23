const fs = require('fs')
const path = require('path')

module.exports = (ctx) => {
  const register = () => {
    ctx.helper.uploader.register('bilibili', {
      handle,
      name: 'Bilibili 图床',
      config: config
    })
  }
  const postOptions = (SESSDATA, fileName, image) => {
    return {
      method: 'POST',
      url: `https://api.vc.bilibili.com/api/v1/drawImage/upload`,
      headers: {
        contentType: 'multipart/form-data',
        'Cookie': `SESSDATA=${SESSDATA}`
      },
      formData: {
        file_up: image,
        category: 'daily',
        biz: 'draw'
      }
    }
  }
  const handle = async (ctx) => {
    let userConfig = ctx.getConfig('picBed.bilibili')
    if (!userConfig.SESSDATA) {
      ctx.emit('notification', {
        title: '请先配置SESSDATA',
        body: '链接已复制，请打开浏览器粘贴地址查看相关教程',
        text: 'https://xlzy520.cn/pages/8b9f9f/'
      })
      return
      // throw new Error('请先配置SESSDATA')
    }
    const SESSDATA = userConfig.SESSDATA
    const imgList = ctx.output
    for (let i in imgList) {
      let image = imgList[i].buffer
      if (!image && imgList[i].base64Image) {
        image = Buffer.from(imgList[i].base64Image, 'base64')
      }
      const data = new Uint8Array(image)
      const fileName = imgList[i].fileName
      const filePath = path.join(__dirname, fileName)
      await fs.writeFileSync(filePath, data)
      const postConfig = postOptions(SESSDATA, fileName, fs.createReadStream(filePath))
      let body = await ctx.Request.request(postConfig)
      fs.unlink(filePath, () => {})
      body = JSON.parse(body)
      if (body.message === 'success') {
        delete imgList[i].base64Image
        delete imgList[i].buffer
        imgList[i].imgUrl = body.data.image_url
      } else {
        ctx.emit('notification', {
          title: '上传失败',
          body: body.message
        })
        throw new Error(body.message)
      }
    }
    return ctx
  }

  const config = ctx => {
    let userConfig = ctx.getConfig('picBed.bilibili')
    if (!userConfig) {
      userConfig = {}
    }
    return [
      {
        name: '获取SESSDATA',
        type: 'input',
        default: 'https://xlzy520.cn/pages/8b9f9f/',
        alias: '获取SESSDATA'
      },
      {
        name: 'SESSDATA',
        type: 'input',
        default: userConfig.SESSDATA,
        required: true,
        message: 'SESSDATA',
        alias: 'SESSDATA'
      }
    ]
  }
  return {
    uploader: 'bilibili',
    config: config,
    register
  }
}
