const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, 'src/public/uploads/')
    },
    filename: (req, file, cb) => {
        var Arquivo = file.originalname;
        var Extensao = Arquivo.substring(Arquivo.lastIndexOf('.') + 1);
        cb(null, Date.now()+'.'+Extensao);
    }
});
const upload = multer ({ storage });

const Photo = require('../models/photo');

const fs = require('fs');


router.get('/', async (req, res) => {
    const photos = await Photo.find();
    res.json(photos);
});

router.post('/', upload.single('image'), async (req, res) =>{
    const image = req.file.filename;
    const photo = new Photo({image});
    await photo.save();
    res.json({status: "Photo salva"});
});

router.delete('/:id/:image', async (req, res) => {
    await Photo.findByIdAndRemove(req.params.id);
    fs.unlinkSync("src/public/uploads/" + req.params.image);
    res.json({status: "Photo deletada"});
});

module.exports = router;