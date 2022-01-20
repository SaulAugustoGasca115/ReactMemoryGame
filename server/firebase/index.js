var admin = require('firebase-admin')
const { applicationDefault } = require('firebase-admin/app')

var serviceAccount = require("../config/fbServiceAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

module.exports = admin