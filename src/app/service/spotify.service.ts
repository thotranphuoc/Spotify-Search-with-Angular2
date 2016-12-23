import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class SpotifyService {
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    constructor( private _http: Http){

    }

    // Ket qua search ten nghe si
    searchArtist(str: string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
            .map(
                res => res.json()
            );
 
    }

    // get thong tin nghe si tu artistId
    getArtist(artistId:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+artistId;
        return this._http.get(this.artistUrl).map(
            res => res.json()
        )
 
    }
    // get tat ca cac album cua nghe si
    getAlbums(artistId:string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumsUrl)
            .map(
                res => res.json()
            );
    }
    // get thong tin album tu albumId
    getAlbum(AlbumId:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+AlbumId;
        return this._http.get(this.albumUrl)
            .map(
                res => res.json()
            );
 
    }
}
//*****************************************************************************************
// Ket qua search ten nghe si. kq tra ve la ds nghe "artists":{ "items":[{"id":""},{}]}
//*****************************************************************************************
// https://api.spotify.com/v1/search?q=phuoc&offset=0&limit=20&type=artist&market=US
// {
//   "artists" : {
//     "href" : "https://api.spotify.com/v1/search?query=phuoc++&offset=0&limit=20&type=artist&market=US",
//     "items" : [ {
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/artist/3mibIJiduF0MVLLAvHZAxw"
//       },
//       "followers" : {
//         "href" : null,
//         "total" : 1826
//       },
//       "genres" : [ "vietnamese pop" ],
//       "href" : "https://api.spotify.com/v1/artists/3mibIJiduF0MVLLAvHZAxw",
//       "id" : "3mibIJiduF0MVLLAvHZAxw",
//       "images" : [ {
//         "height" : 640,
//         "url" : "https://i.scdn.co/image/953e4cdc80b8efdc4025a2c5fc650dd41e4a6e2e",
//         "width" : 640
//       }, {
//         "height" : 300,
//         "url" : "https://i.scdn.co/image/9c393d17ca3fd992ae5e4efc92984747e8a226f2",
//         "width" : 300
//       }, {
//         "height" : 64,
//         "url" : "https://i.scdn.co/image/968b12e013c9c8429e385ad7e74a15fb9514a1ca",
//         "width" : 64
//       } ],
//       "name" : "Noo Phuoc Thinh",
//       "popularity" : 31,
//       "type" : "artist",
//       "uri" : "spotify:artist:3mibIJiduF0MVLLAvHZAxw"
//     }, {
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/artist/2DpuPZSraeVoLMKV5QJj7y"
//       },
//       "followers" : {
//         "href" : null,
//         "total" : 46
//       },
//       "genres" : [ ],
//       "href" : "https://api.spotify.com/v1/artists/2DpuPZSraeVoLMKV5QJj7y",
//       "id" : "2DpuPZSraeVoLMKV5QJj7y",
//       "images" : [ {
//         "height" : 640,
//         "url" : "https://i.scdn.co/image/363e085b215a35094bc305062d6772cd339b0a57",
//         "width" : 640
//       }, {
//         "height" : 300,
//         "url" : "https://i.scdn.co/image/f64d276f65e38158ce9395ea6080390160cd958e",
//         "width" : 300
//       }, {
//         "height" : 64,
//         "url" : "https://i.scdn.co/image/568a3e90727152455a0d809a2a27e7b804f0cce8",
//         "width" : 64
//       } ],
//       "name" : "Phạm Hồng Phước",
//       "popularity" : 8,
//       "type" : "artist",
//       "uri" : "spotify:artist:2DpuPZSraeVoLMKV5QJj7y"
//     }
// }

// *****************************************************************************************
// Ket qua albums cua nghe si duoc chon. Kq tra ve la 1 items: [{"id":""},{}]
// *****************************************************************************************
// {
//   "href" : "https://api.spotify.com/v1/artists/1R52cwGf75yTf7I3Q0Irf8/albums?offset=0&limit=20&album_type=single,album,compilation,appears_on,ep",
//   "items" : [ {
//     "album_type" : "album",
//     "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
//     "external_urls" : {
//       "spotify" : "https://open.spotify.com/album/3cwA0EQ9ZAf4I3Gdvjhndc"
//     },
//     "href" : "https://api.spotify.com/v1/albums/3cwA0EQ9ZAf4I3Gdvjhndc",
//     "id" : "3cwA0EQ9ZAf4I3Gdvjhndc",
//     "images" : [ {
//       "height" : 640,
//       "url" : "https://i.scdn.co/image/3de921a2738ea3528ba4fd59aaa00b8e479f9769",
//       "width" : 640
//     }, {
//       "height" : 300,
//       "url" : "https://i.scdn.co/image/3accd8da899cab0211290c9e295a52fdbb94af76",
//       "width" : 300
//     }, {
//       "height" : 64,
//       "url" : "https://i.scdn.co/image/2145b3739663a2fcb024b7942b8a99399431e9e3",
//       "width" : 64
//     } ],
//     "name" : "T-ARA WINTER",
//     "type" : "album",
//     "uri" : "spotify:album:3cwA0EQ9ZAf4I3Gdvjhndc"
//   }, {
//     "album_type" : "album",
//     "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
//     "external_urls" : {
//       "spotify" : "https://open.spotify.com/album/0LKAn1EdzvXeD56u0TdnYW"
//     },
//     "href" : "https://api.spotify.com/v1/albums/0LKAn1EdzvXeD56u0TdnYW",
//     "id" : "0LKAn1EdzvXeD56u0TdnYW",
//     "images" : [ {
//       "height" : 640,
//       "url" : "https://i.scdn.co/image/20865da1c142203cded1f4dedc663cf139b4a916",
//       "width" : 640
//     }, {
//       "height" : 300,
//       "url" : "https://i.scdn.co/image/6032d165a93f45f6ac85992a9a570c28afa825aa",
//       "width" : 300
//     }, {
//       "height" : 64,
//       "url" : "https://i.scdn.co/image/aade8c6e8d29f2340c0d19f8062707e81082072c",
//       "width" : 64
//     } ],
//     "name" : "Again 1977",
//     "type" : "album",
//     "uri" : "spotify:album:0LKAn1EdzvXeD56u0TdnYW"
//   }],
//   "limit" : 20,
//   "next" : "https://api.spotify.com/v1/artists/1R52cwGf75yTf7I3Q0Irf8/albums?offset=20&limit=20&album_type=single,album,compilation,appears_on,ep",
//   "offset" : 0,
//   "previous" : null,
//   "total" : 23
// }






// {
//   "external_urls" : {
//     "spotify" : "https://open.spotify.com/artist/5fa13NJjmn2uQ3dxZDi2Ge"
//   },
//   "followers" : {
//     "href" : null,
//     "total" : 438
//   },
//   "genres" : [ "vietnamese pop" ],
//   "href" : "https://api.spotify.com/v1/artists/5fa13NJjmn2uQ3dxZDi2Ge",
//   "id" : "5fa13NJjmn2uQ3dxZDi2Ge",
//   "images" : [ {
//     "height" : 640,
//     "url" : "https://i.scdn.co/image/3f8ef503148140b5523d613b428b58625cc05cb9",
//     "width" : 640
//   }, {
//     "height" : 300,
//     "url" : "https://i.scdn.co/image/8131aa003677e47da43d9f7751d21a35a45fa4e9",
//     "width" : 300
//   }, {
//     "height" : 64,
//     "url" : "https://i.scdn.co/image/8510a34c64badf88fef5c193c452804ec11adc7a",
//     "width" : 64
//   } ],
//   "name" : "Bich Phuong",
//   "popularity" : 24,
//   "type" : "artist",
//   "uri" : "spotify:artist:5fa13NJjmn2uQ3dxZDi2Ge"
// }'


//https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj
// {
//   "album_type" : "album",
//   "artists" : [ {
//     "external_urls" : {
//       "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//     },
//     "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//     "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//     "name" : "Cyndi Lauper",
//     "type" : "artist",
//     "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//   } ],
//   "available_markets" : [ ],
//   "copyrights" : [ {
//     "text" : "(P) 2000 Sony Music Entertainment Inc.",
//     "type" : "P"
//   } ],
//   "external_ids" : {
//     "upc" : "5099749994324"
//   },
//   "external_urls" : {
//     "spotify" : "https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj"
//   },
//   "genres" : [ ],
//   "href" : "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj",
//   "id" : "0sNOF9WDwhWunNAHPD3Baj",
//   "images" : [ {
//     "height" : 640,
//     "url" : "https://i.scdn.co/image/b6e762dcce1502ce63eb2c68798843eb2ed53c51",
//     "width" : 640
//   }, {
//     "height" : 300,
//     "url" : "https://i.scdn.co/image/66302ca80395b6be3600d5f0ef69db9e0c43f4f5",
//     "width" : 300
//   }, {
//     "height" : 64,
//     "url" : "https://i.scdn.co/image/e2e8cd6bf776613f9b84d1e4403a8abd51bb7234",
//     "width" : 64
//   } ],
//   "label" : "Epic/Legacy",
//   "name" : "She's So Unusual",
//   "popularity" : 1,
//   "release_date" : "1983",
//   "release_date_precision" : "year",
//   "tracks" : {
//     "href" : "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks?offset=0&limit=50",
//     "items" : [ {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 305560,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/3f9zqUnrnIq0LANhmnaF0V"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/3f9zqUnrnIq0LANhmnaF0V",
//       "id" : "3f9zqUnrnIq0LANhmnaF0V",
//       "name" : "Money Changes Everything",
//       "preview_url" : null,
//       "track_number" : 1,
//       "type" : "track",
//       "uri" : "spotify:track:3f9zqUnrnIq0LANhmnaF0V"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 238266,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/2joHDtKFVDDyWDHnOxZMAX"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/2joHDtKFVDDyWDHnOxZMAX",
//       "id" : "2joHDtKFVDDyWDHnOxZMAX",
//       "name" : "Girls Just Want to Have Fun",
//       "preview_url" : null,
//       "track_number" : 2,
//       "type" : "track",
//       "uri" : "spotify:track:2joHDtKFVDDyWDHnOxZMAX"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 306706,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/6ClztHzretmPHCeiNqR5wD"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/6ClztHzretmPHCeiNqR5wD",
//       "id" : "6ClztHzretmPHCeiNqR5wD",
//       "name" : "When You Were Mine",
//       "preview_url" : null,
//       "track_number" : 3,
//       "type" : "track",
//       "uri" : "spotify:track:6ClztHzretmPHCeiNqR5wD"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 241333,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/2tVHvZK4YYzTloSCBPm2tg"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/2tVHvZK4YYzTloSCBPm2tg",
//       "id" : "2tVHvZK4YYzTloSCBPm2tg",
//       "name" : "Time After Time",
//       "preview_url" : null,
//       "track_number" : 4,
//       "type" : "track",
//       "uri" : "spotify:track:2tVHvZK4YYzTloSCBPm2tg"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 229266,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/6iLhMDtOr52OVXaZdha5M6"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/6iLhMDtOr52OVXaZdha5M6",
//       "id" : "6iLhMDtOr52OVXaZdha5M6",
//       "name" : "She Bop",
//       "preview_url" : null,
//       "track_number" : 5,
//       "type" : "track",
//       "uri" : "spotify:track:6iLhMDtOr52OVXaZdha5M6"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 272840,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/3csiLr2B2wRj4lsExn6jLf"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/3csiLr2B2wRj4lsExn6jLf",
//       "id" : "3csiLr2B2wRj4lsExn6jLf",
//       "name" : "All Through the Night",
//       "preview_url" : null,
//       "track_number" : 6,
//       "type" : "track",
//       "uri" : "spotify:track:3csiLr2B2wRj4lsExn6jLf"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 220333,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/4mRAnuBGYsW4WGbpW0QUkp"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/4mRAnuBGYsW4WGbpW0QUkp",
//       "id" : "4mRAnuBGYsW4WGbpW0QUkp",
//       "name" : "Witness",
//       "preview_url" : null,
//       "track_number" : 7,
//       "type" : "track",
//       "uri" : "spotify:track:4mRAnuBGYsW4WGbpW0QUkp"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 252626,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/3AIeUnffkLQaUaX1pkHyeD"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/3AIeUnffkLQaUaX1pkHyeD",
//       "id" : "3AIeUnffkLQaUaX1pkHyeD",
//       "name" : "I'll Kiss You",
//       "preview_url" : null,
//       "track_number" : 8,
//       "type" : "track",
//       "uri" : "spotify:track:3AIeUnffkLQaUaX1pkHyeD"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 45933,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/53eCpAFNbA9MQNfLilN3CH"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/53eCpAFNbA9MQNfLilN3CH",
//       "id" : "53eCpAFNbA9MQNfLilN3CH",
//       "name" : "He's so Unusual",
//       "preview_url" : null,
//       "track_number" : 9,
//       "type" : "track",
//       "uri" : "spotify:track:53eCpAFNbA9MQNfLilN3CH"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 196373,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/51JS0KXziu9U1T8EBdRTUF"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/51JS0KXziu9U1T8EBdRTUF",
//       "id" : "51JS0KXziu9U1T8EBdRTUF",
//       "name" : "Yeah Yeah",
//       "preview_url" : null,
//       "track_number" : 10,
//       "type" : "track",
//       "uri" : "spotify:track:51JS0KXziu9U1T8EBdRTUF"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 275560,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/2BGJvRarwOa2kiIGpLjIXT"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/2BGJvRarwOa2kiIGpLjIXT",
//       "id" : "2BGJvRarwOa2kiIGpLjIXT",
//       "name" : "Money Changes Everything",
//       "preview_url" : null,
//       "track_number" : 11,
//       "type" : "track",
//       "uri" : "spotify:track:2BGJvRarwOa2kiIGpLjIXT"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 320400,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/5ggatiDTbCIJsUAa7IUP65"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/5ggatiDTbCIJsUAa7IUP65",
//       "id" : "5ggatiDTbCIJsUAa7IUP65",
//       "name" : "She Bop - Live",
//       "preview_url" : null,
//       "track_number" : 12,
//       "type" : "track",
//       "uri" : "spotify:track:5ggatiDTbCIJsUAa7IUP65"
//     }, {
//       "artists" : [ {
//         "external_urls" : {
//           "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
//         },
//         "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
//         "id" : "2BTZIqw0ntH9MvilQ3ewNY",
//         "name" : "Cyndi Lauper",
//         "type" : "artist",
//         "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
//       } ],
//       "available_markets" : [ ],
//       "disc_number" : 1,
//       "duration_ms" : 288240,
//       "explicit" : false,
//       "external_urls" : {
//         "spotify" : "https://open.spotify.com/track/5ZBxoa2kBrBah3qNIV4rm7"
//       },
//       "href" : "https://api.spotify.com/v1/tracks/5ZBxoa2kBrBah3qNIV4rm7",
//       "id" : "5ZBxoa2kBrBah3qNIV4rm7",
//       "name" : "All Through The Night - Live",
//       "preview_url" : null,
//       "track_number" : 13,
//       "type" : "track",
//       "uri" : "spotify:track:5ZBxoa2kBrBah3qNIV4rm7"
//     } ],
//     "limit" : 50,
//     "next" : null,
//     "offset" : 0,
//     "previous" : null,
//     "total" : 13
//   },
//   "type" : "album",
//   "uri" : "spotify:album:0sNOF9WDwhWunNAHPD3Baj"
// }