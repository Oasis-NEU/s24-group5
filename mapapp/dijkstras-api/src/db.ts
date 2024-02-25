import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://chaudhryan:9303WVKiVKES3fyz@neumapapp.2lqojhb.mongodb.net/', {

});

export default mongoose.connection;