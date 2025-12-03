import type { Meta, StoryObj } from '@storybook/react-vite';

import Toast from './Toast';

const meta = {
  component: Toast,
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info'],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'info',
    message: 'Yellow there!',
    duration: 3000,
    closable: true,
  },
};
