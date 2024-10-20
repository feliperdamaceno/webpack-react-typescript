import autoprefixer from 'autoprefixer'
import type { Config } from 'postcss-loader'

const Config: Config = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    })
  ]
}

export default Config
