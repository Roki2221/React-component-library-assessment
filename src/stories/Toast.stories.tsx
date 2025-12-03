import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Toast/Toast';

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info'],
    },
    closable: { control: 'boolean' },
    duration: { control: 'number' },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: 'success',
    message: 'Operation completed!',
    duration: 3000,
    closable: true,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    message: 'Something went wrong!',
    duration: 5000,
    closable: false,
  },
};
