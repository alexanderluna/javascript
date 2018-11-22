const fs = require('fs');
const request = require('request');
const im = require('imagemagick');
const gs = require('ghostscript4js');

const save_image = async (url, file_name) => {
    console.log("=> ", file_name)
    return new Promise(resolve => {
        request(url)
            .pipe(fs.createWriteStream(file_name))
            .on('close', _ => resolve());
    })
};

const convert_image = (img_path) => {
    return new Promise(resolve => {
        let img_base = img_path.split('.')[0];
        let cmd = `${img_path} -resize x1200 -filter triangle -posterize 24 ${img_base}.png`;
        im.convert([...cmd.split(" ")], _ => {
            let cmd = `${img_base}.png ${img_base}.pdf`;
            im.convert([...cmd.split(" ")], _ => resolve());
        });
    });
};

const create_pdf = (img_file_paths) => {
    let pdfs = img_file_paths.map(img => img.split(".")[0] + ".pdf")
    let folder = img_file_paths[0].split('/')[0];
    gs.executeSync(`
        -dBATCH
        -dNOPAUSE
        -q
        -sDEVICE=pdfwrite
        -sOutputFile=${folder}.pdf
        ${pdfs.join(" ")}
    `);
}

module.exports = {
    save_image,
    convert_image,
    create_pdf
}