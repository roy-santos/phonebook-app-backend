const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(
    'Please provide arguments in one of the following formats: \nnode mongo.js <password> \nnode mongo.js <password> <name> <number>'
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://testUser:${password}@cluster0.fch1p.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log('Password incorrect, authentication failed!');
    process.exit(1);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Contact = mongoose.model('Contact', contactSchema);

if (process.argv.length === 3) {
  Contact.find({}).then((result) => {
    result.forEach((contact) => {
      console.log(contact);
    });
    mongoose.connection.close();
  });
} else {
  const contact = new Contact({
    name: process.argv[3],
    number: process.argv[4],
  });

  contact.save().then((result) => {
    console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook `
    );
    mongoose.connection.close();
  });
}
