import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/operations.js";

export default function AvatarUploader() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [preview, setPreview] = useState(user?.avatarUrl || null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Создаем превью изображения для отображения на фронте
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("avatar", file); // Добавляем файл в formData

      const response = await dispatch(updateUser(formData)).unwrap();
      console.log(response); // Ответ с обновленным пользователем
    } catch (err) {
      console.error("Fehler beim Hochladen des Avatars:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6 transition-colors">
      <label className="cursor-pointer">
        <img
          src={preview || "/default-avatar.png"}
          alt="avatar"
          className="w-24 h-24 rounded-full border-2 border-darkGray dark:border-yellow object-cover hover:ring-2 hover:ring-green transition"
          onError={(e) => (e.target.src = "/default-avatar.png")}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      <div className="text-center md:text-left">
        {loading && (
          <p className="text-sm text-darkGray dark:text-yellow animate-pulse">
            💾 Lädt...
          </p>
        )}
        <p className="text-lg font-bold text-darkGray dark:text-yellow">
          {user?.name}
        </p>
        <p className="text-gray-600 dark:text-yellow/80">{user?.email}</p>
      </div>
    </div>
  );
}
