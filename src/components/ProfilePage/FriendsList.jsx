import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FriendsList() {
  const [friends, setFriends] = useState([
    { id: 1, name: "Anna" },
    { id: 2, name: "Max" },
  ]);
  const [newFriend, setNewFriend] = useState("");

  const handleAddFriend = () => {
    if (!newFriend) return;
    setFriends([...friends, { id: Date.now(), name: newFriend }]);
    setNewFriend("");
  };

  const handleRemoveFriend = (id) => {
    setFriends(friends.filter((f) => f.id !== id));
  };

  return (
    <div className="mt-6 max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold mb-4 text-darkGray dark:text-yellow">
        👥 Freunde
      </h2>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Name hinzufügen..."
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
        />
        <Button
          onClick={handleAddFriend}
          className="bg-green dark:bg-yellow text-offWhite dark:text-darkGray hover:bg-darkGray hover:text-yellow transition-colors"
        >
          Hinzufügen
        </Button>
      </div>

      <ul className="space-y-2">
        {friends.map((f) => (
          <li
            key={f.id}
            className="flex justify-between items-center p-2 border-2 border-darkGray dark:border-yellow rounded-xl bg-offWhite dark:bg-darkGray transition-colors"
          >
            <span className="text-darkGray dark:text-yellow">{f.name}</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleRemoveFriend(f.id)}
              className="bg-red dark:bg-yellow text-offWhite dark:text-darkGray hover:bg-darkGray hover:text-yellow transition-colors"
            >
              Entfernen
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
