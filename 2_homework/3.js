const crypto = require('crypto')
const fs = require('fs');
const worker = require('worker_threads');
const
const Key = crypto.createHash('sha256').update('@Hello World@').digest('base64').slice(0,32);
const IV = '1234567890123456';

function encrypt(File_Descriptor)
{
    return new Promise((resolve , reject) => {

    })
}