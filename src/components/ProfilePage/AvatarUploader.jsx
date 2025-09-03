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

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);

    setLoading(true);
    try {
      await dispatch(updateUser({ avatarUrl: reader.result })).unwrap();
    } catch (err) {
      console.error("Ошибка при обновлении аватара:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <label className="cursor-pointer">
        <img
          src={preview || "/default-avatar.png"}
          alt="avatar"
          className="w-24 h-24 rounded-full border object-cover hover:ring-2 hover:ring-green-500 transition"
          onError={(e) => (e.target.src = "/default-avatar.png")}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {loading && <p className="text-sm text-gray-500">💾 Wir sparen...</p>}
      <div>
        <p className="text-lg font-semibold">{user?.name}</p>
        <p className="text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
}
