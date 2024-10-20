import DevConfig from './config/webpack.dev'
import ProdConfig from './config/webpack.prod'

const env = process.env.NODE_ENV || 'development'
export default env === 'production' ? ProdConfig : DevConfig
