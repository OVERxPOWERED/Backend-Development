// Data Modelling
// - Data Modelling is a way to represent data in a way that is easy to use.

// Several tools are used for data modelling some of them are:
// - Moon Modeller
// - Eraser
// - etc.

// In corporate world, data modelling is really important. You might be shown or might have to show models of data to your clients.
// Hence we must know how to model data.

// Refer Models folder for examples of data modelling and practice.

// Characters
// - Characters refer to entities in a database.
// - We begin data modelling by defining characters and their attributes.
// - Here I have created a "todos" folder in the models folder.
// - This "todos" is a practice project, it contains that we need in this project characters and their attributes.
// - Here characters are some js files. This is because we are using mongoose.

// How to create a data model inside a character - Refer Models folder
// - Import mongoose from mongoose.
// - Create a schema.
// - Create a model.
// - Export the model.
// [NOTE: When this model goes into the database its name is changed from "User" to "users", it is a standard naming convention used by mongoDB.]
// [FUNFACT: The plural of "users" is given by default nothing changes, mongoose detects that it is already plural and it does not change it.]

// Insights into schema
// - Each schema consists of a set of fields that define the structure of the data.
// - Each field is a key-value pair, where the key is the name of the field and the value is the type(data type) of the field.
// - Ex. username: String/Number/Boolean
// - But instead of data types, we can also place objects in these values.
// - Ex.
// username: {
//     type: String,
//     required: true,
//     unique: false,
//     default: "Default Value",
//     enum: ["value1", "value2", "value3"],
//     min: 5, [NOTE: This is used to limit the value of the field.]
//     max: 10, [NOTE: This is used to limit the value of the field.]
//     minlength: 5, [NOTE: This is used to limit the length of the string.]
//     maxlength: 10, [NOTE: This is used to limit the length of the string.]
//     trim: true, [NOTE: This is used to remove spaces from the beginning and end of the string.]
//     lowercase: true,
//     uppercase: true
// }
// - Also the fields inside the object such as required, unique, default, etc. also accept an array of values.
// - Where with the value you can also pass a string message if the validation fails.
// - Ex.
// username: {
// type: String,
// required: [true, "Username is required"],
// }

// Timestamps
// - Now to add timestamps(createdAt and updatedAt) into out schema, mongoose has a built-in feature called timestamps.
// - We just add an extra object after the schema object.
// - Ex. const userSchema = new mongoose.Schema({}, {timestamps: true});

// Relations
// - To relate one model with another model, we use references.
// - Ex. createdBy: {
//     type: mongoose.Schema.Types.ObjectId, // This is a reference to the User model, this allows the todo to be associated(related) with a user
//     ref: "User",
// }
// - Refer Models\todos\todo.models.js


// Images, PDFs, Videos etc.
// - We can also store images, PDFs, Videos etc. in the database.
// - However, they make the database very heavy.
// - So inorder to reduce cost, these assets are stored on third party services like AWS, Azure, Google Cloud, cloud many etc.
// - These platfrom give us a public url of the asset.
// - That we can store in the database.


// --- Note for myself --- //
// I will continue the hospital model later. //