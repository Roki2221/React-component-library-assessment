import { useState } from 'react';
import css from './SidebarMenu.module.css';
import SidebarMenuItem from './SidebarMenuItem';
import menu from '../../icons/menu.svg';

export type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
};
interface SidebarMenuProps {
  items: MenuItem[];
}

function SidebarMenu({ items }: SidebarMenuProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleItem = (label: string) => {
    setOpenItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label],
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className={css.overlay}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}

      <aside
        onClick={() => {
          setIsOpen(true);
        }}
        className={`${css.sidebar} ${isOpen ? css.open : css.closed}`}
      >
        {isOpen ? (
          <nav className={css.menu}>
            {items.map(item => (
              <SidebarMenuItem
                key={item.label}
                item={item}
                isOpen={openItems.includes(item.label)}
                onToggle={() => toggleItem(item.label)}
              />
            ))}
          </nav>
        ) : (
          <div className={css.menuIcon}>
            <img src={menu} alt="menu" />
          </div>
        )}
      </aside>
    </>
  );
}

export default SidebarMenu;
