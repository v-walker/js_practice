// 5. Music site
// Create a Dynamic Website in Node

// a). Create a new node/express project

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('images'));

// b). Create an array with artists/places/music cds in app.js

let songs = [
    {  
        index: 0,
        name:"Fleetwood Mac",
        publishDate:"1975",
        imgURL:"/fleetwoodMac1975.png",

        songTitles:["Monday Morning", "Warm Ways", "Blue Letter", "Rhiannon", "Over My Head", "Crystal", "Say You Love Me", "Landslide", "World Turning", "Sugar Daddy", "I'm So Afraid"]
    },
    {  
        index: 1,
        name:"Rumors",
        publishDate:"1977",
        imgURL:"/rumors.png",

        songTitles:["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way", "Songbird", "The Chain", "You Make Loving Fun", "Oh Daddy", "Gold Dust Woman"]
    },
    {
        index: 2,
        name:"Tusk",
        publishDate:"1979",
        imgURL:"/tusk.png",

        songTitles:["Over & Over", "The Ledge", "Think About Me", "Save Me a Place", "Sara", "What Makes You Think You're the One", "Storms", "That's All for Everyone", "Not That Funny", "Sisters of the Moon", "Angel", "That's Enough for Me", "Brown Eyes", "Never Make Me Cry", "I Know I'm Not Wrong", "Honey Hi", "Beautiful Child", "Walk a Thin Line", "Tusk", "Never Forget"]
    },
    {  
        index: 3, 
        name:"Mirage",
        publishDate:"1982",
        imgURL:"/mirage.png",

        songTitles:["Love in Store", "Can't Go Back", "That's Alright", "Book of Love", "Gypsy", "Only Over You", "Empire State", "Straight Back", "Hold Me", "Oh Diane","Eyes of the World", "Wish You Were Here"]
    },
]

// c). Create a front page ('/') that tells about your music artist. Include a couple of pictures

app.get('/', (req, res) => {
    res.send(`
    <h1>Fleetwood Mac</h1>
    <p><b>Fleetwood Mac</b> are a British-American rock band, formed in London in 1967. Fleetwood Mac were founded by guitarist Peter Green, drummer Mick Fleetwood and guitarist Jeremy Spencer, before bassist John McVie joined the line-up for their self-titled debut album. Danny Kirwan joined as a third guitarist in 1968. Keyboardist Christine Perfect, who contributed as a session musician from the second album, married McVie and joined in 1970.</p>
    <br><br>
    <figure>
        <img src="fleetwoodMac1973.jpg" alt="Fleetwood Mac in 1973" width="200px">
        <fig caption>1973 line-up with Christine McVie, Mick Fleetwood, Bob Weston, John McVie, and Bob Welch.</fig caption>
    </figure>
    <p>The addition of Buckingham and Nicks gave the band a more pop rock sound, and their 1975 self-titled album, Fleetwood Mac, reached No. 1 in the United States. Rumours (1977), Fleetwood Mac's second album after the arrival of Buckingham and Nicks, produced four U.S. Top 10 singles and remained at number one on the American albums chart for 31 weeks. It also reached the top spot in countries around the world and won a Grammy Award for Album of the Year in 1978. Rumours has sold over 40 million copies worldwide, making it one of the best-selling albums in history. Although each member of the band went through a breakup (John and Christine McVie, Buckingham and Nicks, and Fleetwood and his wife Jenny) while recording the album, they continued to write and record music together.</p>
    <br><br>
    <figure>
        <img src="fleetwoodMac1977.jpg" alt="Fleetwood Mac in 1977" width="200px">
        <fig caption>Fleetwood Mac in 1977. From left to right: Mick Fleetwood, Christine McVie, John McVie, Stevie Nicks, and Lindsey Buckingham.</fig caption>
    </figure>
    <p>The band's personnel remained stable through three more studio albums, but by the late 1980s began to disintegrate. After Buckingham and Nicks each left the band, they were replaced by a number of other guitarists and vocalists. A 1993 one-off performance for the first inauguration of Bill Clinton featured the line-up of Fleetwood, John McVie, Christine McVie, Nicks, and Buckingham back together for the first time in six years. A full reunion occurred four years later, and the group released their fourth U.S. No. 1 album, The Dance (1997), a live compilation of their hits, also marking the 20th anniversary of Rumours. Christine McVie left the band in 1998, but continued to work with the band in a session capacity. Meanwhile, the group remained together as a four-piece, releasing their most recent studio album, Say You Will, in 2003. Christine McVie rejoined the band full-time in 2014. In 2018, Buckingham was fired from the band[7] and was replaced by Mike Campbell, formerly of Tom Petty and the Heartbreakers, and Neil Finn of Split Enz and Crowded House.</p>
    <br><br>
    <figure>
        <img src="fleetwoodMac2009.jpg" alt="Fleetwood Mac in 2009" width="200px">
        <fig caption>Fleetwood Mac in Saint Paul, Minnesota in 2009.</fig caption>
    </figure>
    <p>Fleetwood Mac have sold more than 120 million records worldwide, making them one of the world's best-selling bands. In 1979, the group were honoured with a star on the Hollywood Walk of Fame. In 1998 the band were inducted into the Rock and Roll Hall of Fame[8] and received the Brit Award for Outstanding Contribution to Music.[9] In 2018, the band received the MusiCares Person of the Year award by The Recording Academy in recognition of their artistic achievement in the music industry and dedication to philanthropy.</p>

    <p>Read more about <b>Fleetwood Mac</b> on <a href="https://en.wikipedia.org/wiki/Fleetwood_Mac">Wikipedia</a>.</p>
    `);
});

// d). Create a page that lists all of the cds for the artist. Each CD should be a hyperlink that navigates to a page that corresponds to the index in the json file: For example,
    // example ('/cds')
    // The Carter
    // Free Weezy

let listOfAlbums = ``;
for (album of songs) {
    listOfAlbums += `<li>Album: <a href="/albums/${album.index}">${album.name}</a></li>`
};
let nav = `<ul>${listOfAlbums}</ul>`

app.get('/albums', (req, res) => {
    let htmlBlock = `<h1>Fleetwood Mac Albums</h1>`;
    htmlBlock += nav;
    res.send(htmlBlock);
});

// e). Create a route that takes in arguments on the url that will display one artist/place/music at a time.

app.get('/albums/:index', (req, res) => {
    let index = req.params.index;
    let songList = ``
    let songTitles = songs[index].songTitles

    for (title of songTitles) {
        songList += `<li>${title}</li>`
    }

    let songUl = `<ul>${songList}</ul>`

    res.send(`
    <h1>Fleetwood Mac</h1>
    ${nav}
    <br><br>
    <h2>${songs[index].name}</h2>
    <img src="${songs[index].imgURL}" width="200px"></img>
    <p>Songs: ${songUl}</p>
    `)

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});