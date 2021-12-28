import mongoose from 'mongoose';

mongoose.set('debug', true);
mongoose.set('returnOriginal', false);
mongoose.set('runValidators', true);

const connectToDB = () => mongoose.connect('mongodb://db:27017');

export default connectToDB;
