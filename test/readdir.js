const fs = require('fs');

const path = require('path');

fs.readdir(__dirname, function (err, files) {
    // console.log(files)
    files.forEach(function (item, index) {
        // console.log(item)
        fs.stat(path.join(__dirname, item), function (err, stat) {
            if (stat.isFile()) {
                console.log(`是文件`);
            } else {
                console.log(`是目录`)
            }
        })

    })


});