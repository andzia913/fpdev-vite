import FlatEditor from "../FlatEditor";
import DateForm from "../DateForm";
import DiaryForm from "../DairyForm";

const AdminForms = ({ handleLogOut }: any) => {
  return (
    <div className="space-y-6">

      <div className="flex justify-end">
        <button
          onClick={handleLogOut}
          className="text-sm border px-3 py-1 rounded"
        >
          Wyloguj
        </button>
      </div>

      <FlatEditor />
      <DateForm />
      <DiaryForm />

    </div>
  );
};

export default AdminForms;