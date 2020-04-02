let path = require("path");
let fs = require("fs");

let logsPath = process.cwd() + "/Logs";

function deleteFiles(){
    if (fs.existsSync(logsPath)) {
        process.chdir('Logs');
        var files = fs.readdirSync(logsPath);
        for (var i = 0; i < files.length; i++) {
            console.log(('delete file...' + files[i]));
            fs.unlinkSync(files[i]);
        }
        process.chdir('../');
        fs.rmdirSync('Logs');
    }
}

function createFiles(){
    if (!fs.existsSync(logsPath)) {
        fs.mkdirSync("Logs");
        process.chdir('Logs');
        for (var data = 0; data < 15; data++) {
            console.log(('log' + [data] + ".txt"));
            fs.writeFileSync('log' + [data] + ".txt");
        }
    }
}

createFiles();
deleteFiles();