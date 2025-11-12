import './submitButton.scss';

interface SubmitButtonProps {
  label: string;
  className?: string;
}

export const SubmitButton = ({ label, className }: SubmitButtonProps) => {
  return (
    <button className={className} type="submit">
      {label}
    </button>
  );
};
