"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const errorMW = require('./middleWares/erroMiddleWare');
require('dotenv').config();
const stripe = require('stripe')(process.env.secret_key);
const app = express();
app.use(express.json());
app.use(cors());
app.get('/checkout-test', (req, res) => {
    res.send('Hello, world!');
});
app.post('/checkout', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.length)
        return next({ message: 'no items where send', status: 400 });
    const BASE_URL = process.env.BASE_URL || 'http://localhost:5173/';
    try {
        const session = yield stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: req.body,
            mode: 'payment',
            success_url: BASE_URL,
            cancel_url: BASE_URL,
        });
        res.json({ id: session.id });
    }
    catch (e) {
        console.log(e);
        next(e);
    }
}));
app.use(errorMW);
app.listen(4000, () => {
    console.log('listening on port 4000...');
});
/*

NOTE

This is a simple server to handle api calls to Stripe Services

*/
