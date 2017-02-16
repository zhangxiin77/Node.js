/**
 * Created by dllo on 17/2/15.
 */
var fs = require('fs');
var getStaticFile = function (filePath, response) {
    fs.stat(filePath, function (error, stat) {
        if (!error && stat.isFile())
        {
            fs.createReadStream(filePath).pipe(response);
            response.statusCode = 200;
        }
        else
        {
            //文件无法找到
            if (error.code == 'ENOENT')
            {
                response.statusCode = 404;
                response.end('404 NOT FOUND');
            }
            //服务器存在问题
            else
            {
                response.statusCode = 500;
                response.end('500  Server Error');
            }
        }
    });
};
module.exports = getStaticFile;