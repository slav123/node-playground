var config = {'host': '', 'port': 21, 'user': '', 'password': ''}

var Client = require('ftp');

var c = new Client();
c.on('ready', function () {
    c.list('web', function (err, list) {
        if (err) throw err;
        console.log(err);
        console.dir(list);
        c.end();
    });
    
});

// connect to 
c.connect(config);
