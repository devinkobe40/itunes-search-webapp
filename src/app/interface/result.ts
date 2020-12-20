export interface Result {
  "wrapperType": string;
  "kind": string;
  "artistId": number;
  "collectionId": number;
  "trackId": number;
  "artistName": string;
  "collectionName": string;
  "trackName": string;
  "collectionCensoredName": string;
  "trackCensoredName": string;
  "artistViewUrl": string;
  "collectionViewUrl": string;
  "trackViewUrl": string;
  "previewUrl": string;
  "artworkUrl30": string;
  "artworkUrl60": string;
  "artworkUrl100": string;
  "collectionPrice": number;
  "trackPrice": number;
  "releaseDate": string;
  "collectionExpliciteness": string;
  "trackExpliciteness": string;
  "discCount": number;
  "discNumber": number;
  "trackCount": number;
  "trackNumber": number;
  "trackTimeMillis": number;
  "country": string;
  "currency": string;
  "primaryGenreName": string;
  "isStreamable": boolean;
}
export interface ResultCount {
  "resultCount": number;
}
