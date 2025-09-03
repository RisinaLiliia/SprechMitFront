import { useState, createContext, useContext } from "react";

const DialogContext = createContext();

export function Dialog({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children }) {
  const { setIsOpen } = useContext(DialogContext);

  const handleClick = () => setIsOpen(true);

  if (asChild) {
    return (
      <span onClick={handleClick} style={{ display: "inline-block" }}>
        {children}
      </span>
    );
  }

  return <button onClick={handleClick}>{children}</button>;
}

export function DialogContent({ children }) {
  const { isOpen, setIsOpen } = useContext(DialogContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}
