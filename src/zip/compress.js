import zlib from 'zlib'
import { pipeline } from 'stream'
import {
    createReadStream,
    createWriteStream
} from 'fs';

export const compress = async () => {
    const gzip = zlib.createGzip();
    const source = createReadStream('./src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('./src/zip/files/archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress()