/**
 * This slot allows the creation of a <PluginSidebar> with a menu item that when clicked will expand the sidebar to the appropriate Plugin section.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar-more-menu-item/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { mapMarker } from '@wordpress/icons';

const PluginSidebarMoreMenuItemTest = () => (
    <>
        <PluginSidebarMoreMenuItem target="sidebar-name" icon={ mapMarker }>
            GBA: SlotFill Plugin Sidebar More Menu Item
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="sidebar-name" icon={ mapMarker } title="My Sidebar">
            GBA Content
        </PluginSidebar>
    </>
);

registerPlugin( 'plugin-sidebar-expanded-test', {
    render: PluginSidebarMoreMenuItemTest,
} );