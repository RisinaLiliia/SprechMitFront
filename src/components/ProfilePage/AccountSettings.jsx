import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/user/operations";

export default function AccountSettings() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    setSaving(true);
    await dispatch(updatePassword(form));
    setSaving(false);
    setForm({ currentPassword: "", newPassword: "" });
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">⚙️ Kontoeinstellungen</h2>

      <div className="flex flex-col gap-4">
        <label>
          Aktuelles Passwort:
          <Input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            className="mt-1"
          />
        </label>
        <label>
          Neues Passwort:
          <Input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            className="mt-1"
          />
        </label>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "💾 Speichern..." : "Passwort ändern"}
        </Button>
      </div>
    </div>
  );
}
