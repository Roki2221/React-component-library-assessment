import styles from './SidebarMenu.module.css';

interface SidebarMenuItemProps {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
}

type MenuItem = {
  label: string;
  link?: string;
  children?: MenuItem[];
};
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

export default SidebarMenuItem;
