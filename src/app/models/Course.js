const slug = require('mongoose-slug-updater');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoID: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
