// To run: cd public, node inmemoriamCreator.js

var fs = require('fs');

var folder = './images/inmemoriam/';
var images = [];
var leImages = { images };
var i = 0;

fs.readdirSync(folder).forEach(file => {
    // if(file.match(/.jpg$/g)){console.log(file);}
    if(file.match(/.jpg$/g)){ 
		i++;
		let title = file.replace('.jpg', ''); // Removes extension
		title = title.replace(/\d/g, ''); // Removes numbers
		title = title.replace(/_/g, ' '); // Underscore becomes space
		title = title.replace(/\s+$/, ''); //Removes whitespaces at the end

		let link = '';
		if(title.match(/ranger/ig)){
			link = 'http://warhammer40k.wikia.com/wiki/Rangers';
		}
		else if(title.match(/squig/ig)){
			link = 'https://warhammerfantasy.fandom.com/wiki/Colossal_Squig';
		}
		else if(title.match(/slimux/ig)){
			link = 'http://warhammer40k.wikia.com/wiki/Horticulous_Slimux';
		}
		else if(title.match(/verminlord/ig)){
			link = 'https://warhammerfantasy.fandom.com/wiki/Verminlord';
		}
		else{link = 'http://warhammer40k.wikia.com/wiki/Warhammer_40k_Wiki';}

		let a = { image : file, title : title, info : link, id : i };
		//console.log(file);
		images.push(a);
    }
});

console.log(leImages);

  var imageString = JSON.stringify(leImages);

  fs.writeFileSync("../src/pages/inmemoriam_list.json", imageString);