import { ButtonBase } from './ButtonBase';
import type { ButtonBaseProps } from '@/types/ui';

export function SecondaryButton(props: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      variantClass="border-neutral-300 bg-white text-neutral-900 hover:border-brand-600 hover:text-brand-600"
    />
  );
}
