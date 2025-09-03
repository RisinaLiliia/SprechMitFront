import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function VocabularyList() {
  const [words, setWords] = useState([
    { id: 1, word: "Hallo", translation: "Hello" },
    { id: 2, word: "Tschüss", translation: "Bye" },
  ]);
  const [newWord, setNewWord] = useState({ word: "", translation: "" });

  const handleAddWord = () => {
    if (!newWord.word || !newWord.translation) return;
    setWords([...words, { id: Date.now(), ...newWord }]);
    setNewWord({ word: "", translation: "" });
  };

  const handleDelete = (id) => {
    setWords(words.filter((w) => w.id !== id));
  };

  return (
    <div className="mt-6 max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold mb-4 text-darkGray dark:text-yellow">
        📚 Mein Wörterbuch
      </h2>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Wort"
          value={newWord.word}
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
        />
        <Input
          placeholder="Übersetzung"
          value={newWord.translation}
          onChange={(e) =>
            setNewWord({ ...newWord, translation: e.target.value })
          }
        />
        <Button
          onClick={handleAddWord}
          className="bg-green dark:bg-yellow text-offWhite dark:text-darkGray hover:bg-darkGray hover:text-yellow transition-colors"
        >
          Hinzufügen
        </Button>
      </div>

      <ul className="space-y-2">
        {words.map((w) => (
          <li
            key={w.id}
            className="flex justify-between items-center p-2 border-2 border-darkGray dark:border-yellow rounded-xl bg-offWhite dark:bg-darkGray transition-colors"
          >
            <span className="text-darkGray dark:text-yellow">
              {w.word} — {w.translation}
            </span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(w.id)}
              className="bg-red dark:bg-yellow text-offWhite dark:text-darkGray hover:bg-darkGray hover:text-yellow transition-colors"
            >
              Löschen
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
