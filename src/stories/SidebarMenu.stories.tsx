import type { Meta, StoryObj } from '@storybook/react-vite';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';
import type { MenuItem } from '../components/SidebarMenu/SidebarMenu';
const meta: Meta<typeof SidebarMenu> = {
  component: SidebarMenu,
  title: 'Navigation/SidebarMenu',
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const menuItems: MenuItem[] = [
  { label: 'Dashboard', link: '/dashboard' },
  {
    label: 'Settings',
    children: [
      { label: 'Profile', link: '/profile' },
      { label: 'Security', link: '/security' },
    ],
  },
  { label: 'Logout', link: '/logout' },
];

export const OpenWithNested: Story = {
  args: {
    items: menuItems,
  },
};
