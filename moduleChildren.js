const url = require('url');

// const target = require('./targetChildren.js');

// console.log(module.children)


// const dns = require('dns');

// dns.lookup('www.baidu.com', (err, address, family) => {
//     console.log('IP 地址: %j 地址族: IPv%s', address, family);
// });

// const dns = require('dns');

// dns.resolve4('www.baidu.com', (err, addresses) => {
//     if (err) throw err;

//     console.log(`IP 地址: ${JSON.stringify(addresses)}`);

//     addresses.forEach((a) => {
//         dns.reverse(a, (err, hostnames) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`IP 地址 ${a} 逆向解析到域名: ${JSON.stringify(hostnames)}`);
//         });
//     });
// });


const { Resolver } = require('dns');
const resolver = new Resolver();
resolver.setServers(['4.4.4.4']);

// This request will use the server at 4.4.4.4, independent of global settings.
resolver.resolve4('www.baidu.com', (err, addresses) => {
   console.log(addresses);
});