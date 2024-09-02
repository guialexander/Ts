const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // el ? es opcional
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: [skills[0], skills[1]],
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
