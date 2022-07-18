const multer = require("multer");
const ObjectStorage = require("./ObjectStorage");

const multerOS = multer({
    storage: ObjectStorage({
        destination(req, file, cb) {
            cb(null, `/files/`);
        },
    }),
});

module.exports = multerOS;