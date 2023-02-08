/**
 * This slot allows for adding items into the Gutenberg Toolbar.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-sidebar/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
// import { email } from '@wordpress/icons';

const PluginSidebarTest = () => (
    <PluginSidebar name="plugin-sidebar-test" title="GBA Plugin" icon="email-alt">
        <p>GBA: SlotFill Plugin Sidebar</p>
    </PluginSidebar>
);

registerPlugin( 'plugin-sidebar-test', { render: PluginSidebarTest } );