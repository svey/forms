module.exports = {
  client: 'pg',
  connection: process.env.Database_URL || { user : '', database : 'form' }
};
