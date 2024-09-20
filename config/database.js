const Env = use('Env')

const databaseConfig = {
  connection: Env.get('DB_CONNECTION', 'pg'),
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', '127.0.0.1'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', 'postgres'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    }
  }
}

module.exports = databaseConfig
