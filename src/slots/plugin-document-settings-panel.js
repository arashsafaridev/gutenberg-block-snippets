/**
 * This SlotFill allows registering a UI to edit Document settings.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

const PluginDocumentSettingPanelDemo = () => (
    <PluginDocumentSettingPanel
        name="custom-panel"
        title="GBA Panel"
        className="custom-panel"
    >
        GBA: Slot Test Document Settings Panel
    </PluginDocumentSettingPanel>
);

registerPlugin( 'plugin-document-setting-panel-demo', {
    render: PluginDocumentSettingPanelDemo,
    icon: 'palmtree',
} );