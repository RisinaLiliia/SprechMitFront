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
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">👥 Freunde</h2>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Name hinzufügen"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
        />
        <Button onClick={handleAddFriend}>Hinzufügen</Button>
      </div>

      <ul className="space-y-2">
        {friends.map((f) => (
          <li
            key={f.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span>{f.name}</span>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleRemoveFriend(f.id)}
            >
              Entfernen
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
