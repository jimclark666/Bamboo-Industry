import { ButtonBase } from './ButtonBase';
import type { ButtonBaseProps } from '@/types/ui';

export function PrimaryButton(props: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      variantClass="border-brand-600 bg-brand-600 text-white shadow-sm hover:bg-brand-500 hover:border-brand-500"
    />
  );
}
