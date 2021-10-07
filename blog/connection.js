const mongoose=require('mongoose')

const dbPath='mongodb+srv://admin:pakistan1947@cluster0.sf6xg.mongodb.net/POST?retryWrites=true&w=majority'

mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  console.error(err.message); 
  process.exit(1); 
});

const db = mongoose.connection;

db.on('error', () => {
  console.log(' error occurred from the database');
});
db.once('open', () => {
  console.log(' successfully opened the database');
});

module.exports = mongoose;