import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, from: "Anna", text: "Hallo!" },
    { id: 2, from: "Du", text: "Hi Anna!" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const bottomRef = useRef();

  const handleSend = () => {
    if (!newMessage) return;
    setMessages([
      ...messages,
      { id: Date.now(), from: "Du", text: newMessage },
    ]);
    setNewMessage("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">💬 Chat</h2>
      <div className="border rounded p-4 h-64 overflow-y-auto flex flex-col gap-2 bg-gray-50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-2 rounded ${
              m.from === "Du"
                ? "bg-green-100 self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            <strong>{m.from}: </strong>
            {m.text}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="flex gap-2 mt-2">
        <Input
          placeholder="Nachricht schreiben..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Senden</Button>
      </div>
    </div>
  );
}
