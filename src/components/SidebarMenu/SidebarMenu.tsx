import React, { useState } from 'react';
import styles from './SidebarMenu.module.css';

export type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
};

interface SidebarMenuProps {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
}

function SidebarMenu({ open, onClose, items }: SidebarMenuProps) {
  // який пункт меню розкрито (по label)
  const [openItems, setOpenItems] = useState<string[]>([]);

  // toggle для відкриття/закриття вкладеного меню
  const toggleItem = (label: string) => {
    setOpenItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label],
    );
  };

  return (
    <>
      {/* Оверлей */}
      {open && <div className={styles.overlay} onClick={onClose} />}

      {/* Сайдбар */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <nav className={styles.menu}>
          {items.map(item => (
            <SidebarMenuItem
              key={item.label}
              item={item}
              isOpen={openItems.includes(item.label)}
              onToggle={() => toggleItem(item.label)}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

export default SidebarMenu;

//
// ---- Внутрішній компонент: один пункт меню ----
//
interface SidebarMenuItemProps {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
}

function SidebarMenuItem({ item, isOpen, onToggle }: SidebarMenuItemProps) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={styles.item}>
      <div
        className={styles.itemHeader}
        onClick={hasChildren ? onToggle : undefined}
      >
        <span className={styles.label}>{item.label}</span>

        {hasChildren && (
          <span className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}>
            ▶
          </span>
        )}
      </div>

      {/* Якщо є підменю */}
      {hasChildren && isOpen && (
        <div className={styles.submenu}>
          {item.children!.map(child => (
            <div key={child.label} className={styles.submenuItem}>
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
