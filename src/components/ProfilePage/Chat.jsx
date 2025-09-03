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
    <div className="mt-6 max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold mb-4 text-darkGray dark:text-yellow">
        💬 Chat
      </h2>

      <div className="border-2 border-darkGray dark:border-yellow rounded-2xl p-4 h-64 overflow-y-auto flex flex-col gap-2 bg-offWhite dark:bg-darkGray transition-colors">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-2 rounded-xl max-w-[80%] ${
              m.from === "Du"
                ? "bg-green/30 self-end text-darkGray dark:text-darkGray"
                : "bg-gray-200 dark:bg-yellow/20 self-start text-darkGray dark:text-yellow"
            }`}
          >
            <strong>{m.from}:</strong> {m.text}
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
        <Button
          onClick={handleSend}
          className="bg-green dark:bg-yellow text-offWhite dark:text-darkGray hover:bg-darkGray hover:text-yellow transition-colors"
        >
          Senden
        </Button>
      </div>
    </div>
  );
}
