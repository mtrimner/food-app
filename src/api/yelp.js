import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer aDGrddefPPD66mi5YtdPh3bMuYO6DEqxbHtP-HtWGusnmeOpHDHEU5T7ygrp0IYkkChj5v5qk97b_g0NMYnUET3ZbaQSc1AtzFFcvgJVTImYelU-lVpEIp8knCYXYHYx'
    }
});