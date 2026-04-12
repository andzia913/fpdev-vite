type Props = {
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (v: string) => void;
  error?: string;
};

export const Input = ({ label, value, placeholder, onChange, error }: Props) => (
  <div className="space-y-1 max-w-xs w-full">
    <label className="text-sm text-gray-500">{label}</label>

    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full border rounded px-3 py-2 text-sm 
        ${error ? "border-red-400" : "border-gray-300"}
      `}
    />

    {error && (
      <p className="text-xs text-red-500">{error}</p>
    )}
  </div>
);