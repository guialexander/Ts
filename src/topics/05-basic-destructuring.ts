interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}
export {};

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Systema Solar",
    year: 2015,
  },
};

const { audioVolume, songDuration, song, details } = audioPlayer;

const { author, year } = details;
// otra forma
const { author: author2, year: year2 } = audioPlayer.details;

const {
  audioVolume: audio,
  songDuration: duration,
  song: cancion,
} = audioPlayer;
console.log(`canción: ${cancion} + ${song}`);
console.log(
  `Duración: ${duration} + ${songDuration} + año: ${year2} + autor2: ${author2}`
);
console.log(
  `Audio: ${audio} + ${audioVolume} + autor: ${author} + año: ${year}`
);

//Destructuración de Arreglos array
const dbz: string[] = ["goku", "Vegeta", "freezzer", "Capitan America"];

const [cero, one, two, three = "tress"] = dbz;

console.log(`${cero}+${one}+${two}+${three}`);
