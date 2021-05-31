'use strict';

require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cors = require('cors');
const app = express();

// const corsOptions = {
//   origin: 'https://buycoins-github-search.netlify.app/',
// };

app.get(
  '/api/oauth',
  cors(),
  (
    req: any,
    res: {
      json: (arg0: { status: number; message: string | undefined }) => void;
    }
  ) => {
    // @ts-ignore
    return res.json({
      status: 200,
      message: process.env.OAUTH_TOKEN,
    });
  }
);

exports.app = functions.https.onRequest(app);
