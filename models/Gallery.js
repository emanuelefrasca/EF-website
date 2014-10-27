var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	type: { type: Types.Select, options: 'photo, graphic' },
	order: { type: Types.Number },
	heroImage: { type: Types.CloudinaryImage },
	description: {type: String},
	images: { type: Types.CloudinaryImages }
});

Gallery.register();
