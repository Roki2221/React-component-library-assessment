import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input/Input';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'number'],
    },
    clearable: { control: 'boolean' },
    autocomplete: { control: 'radio', options: ['on', 'off'] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    clearable: false,
    placeholder: 'Enter text',
    autocomplete: 'on',
  },
};

export const PasswordWithClear: Story = {
  args: {
    type: 'password',
    clearable: true,
    placeholder: 'Enter password',
    autocomplete: 'off',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    clearable: false,
    placeholder: 'Enter number',
    autocomplete: 'on',
  },
};
