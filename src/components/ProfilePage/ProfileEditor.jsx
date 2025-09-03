import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/operations";

export default function ProfileEditor() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  if (!user) {
    return <p className="text-gray-500">Загрузка профиля...</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        Редактировать профиль
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Имя</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {status === "loading" ? "Сохраняем..." : "Сохранить"}
      </button>
    </form>
  );
}
