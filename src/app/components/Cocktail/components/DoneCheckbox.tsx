import React from 'react';
import { useTranslation } from 'react-i18next';

interface CheckboxLabelProps {
  name: string;
  done: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DoneCheckbox: React.FC<CheckboxLabelProps> = ({
  name,
  done,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <label className="flex items-center p-2 capitalize cursor-pointer bg-gray-200 size-fit">
      <input
        type="checkbox"
        className="hidden"
        defaultChecked={done}
        onChange={onChange}
      />
      <span>
        <span className="hidden">{name}</span> {t('done')}
      </span>
    </label>
  );
};

export default DoneCheckbox;
