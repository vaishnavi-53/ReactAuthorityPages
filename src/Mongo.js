const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const url="mongodb+srv://user1:kmit1@cluster0.zppk6qd.mongodb.net/VehicleRegistration?retryWrites=true&w=majority";
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(url,connectionparams).then(() => {console.log("CONNECTED")}).catch( () => {console.log("NOT ABLE TO CONNECT")});

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  OwnwerName: String,
  RegistrationNumber: String,
  ChassisNo:String,
  RegistrationDate:String
  },
  {collection: "citizenReg"}
  );

  const Item = mongoose.model("", itemSchema);

  Item.find({}, (err, items) => {
    if(err) console.warn(err);
    console.log(items);
  });