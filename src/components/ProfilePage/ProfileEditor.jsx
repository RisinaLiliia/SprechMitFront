import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/user/operations";

export default function ProfileEditor() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);

  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name || "", email: user.email || "" });
    }
  }, [user]);

  if (!user) {
    return (
      <p className="text-center text-offWhite dark:text-yellow mt-10">
        Profil wird geladen...
      </p>
    );
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-offWhite dark:bg-darkGray rounded-2xl p-6 shadow-md space-y-6 transition-colors"
    >
      <h2 className="text-2xl font-extrabold text-darkGray dark:text-yellow">
        Profil bearbeiten
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-darkGray dark:text-yellow mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 border-darkGray dark:border-yellow rounded-lg px-3 py-2 bg-offWhite dark:bg-darkGray text-darkGray dark:text-yellow focus:outline-none focus:ring-2 focus:ring-green transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-darkGray dark:text-yellow mb-1">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-darkGray dark:border-yellow rounded-lg px-3 py-2 bg-offWhite dark:bg-darkGray text-darkGray dark:text-yellow focus:outline-none focus:ring-2 focus:ring-green transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-green dark:bg-yellow text-offWhite dark:text-darkGray font-bold py-2 px-4 rounded-lg hover:bg-darkGray hover:text-yellow transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Speichern..." : "Speichern"}
      </button>
    </form>
  );
}
