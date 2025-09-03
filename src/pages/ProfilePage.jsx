import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../redux/user/operations";

import { User, BookOpen, Users, MessageSquare, Settings } from "lucide-react";

import AvatarUploader from "../components/ProfilePage/AvatarUploader.jsx";
import ProfileEditor from "../components/ProfilePage/ProfileEditor.jsx";
import VocabularyList from "../components/ProfilePage/VocabularyList.jsx";
import FriendsList from "../components/ProfilePage/FriendsList.jsx";
import Chat from "../components/ProfilePage/Chat.jsx";
import AccountSettings from "../components/ProfilePage/AccountSettings.jsx";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user);

  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (!user) dispatch(fetchCurrentUser());
  }, [dispatch, user]);

  if (status === "loading")
    return <p className="text-center mt-10">⏳ Profil wird geladen...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Fehler: {error}</p>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
            <AvatarUploader />
            <ProfileEditor />
          </>
        );
      case "vocabulary":
        return <VocabularyList />;
      case "friends":
        return <FriendsList />;
      case "chat":
        return <Chat />;
      case "settings":
        return <AccountSettings />;
      default:
        return null;
    }
  };

  const menuItems = [
    { id: "profile", label: "Profil", icon: User },
    { id: "vocabulary", label: "Wörterbuch", icon: BookOpen },
    { id: "friends", label: "Freunde", icon: Users },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "settings", label: "Einstellungen", icon: Settings },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6">👤 Mein Profil</h1>

      <div className="block md:hidden space-y-2 mb-6">
        {menuItems.map(({ id, label, icon }) => {
          const IconComponent = icon;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center w-full px-4 py-3 rounded-xl border text-left transition ${
                activeTab === id
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "bg-gray-50 hover:bg-gray-100 text-gray-600"
              }`}
            >
              <IconComponent className="mr-3 h-5 w-5" />
              <span className="font-medium">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="hidden md:flex gap-4 border-b mb-6">
        {menuItems.map(({ id, label }) => (
          <button
            key={id}
            className={`px-4 py-2 font-semibold ${
              activeTab === id
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div>{renderTabContent()}</div>
    </div>
  );
}
